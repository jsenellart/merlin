"""
Lightweight memory monitoring utilities for CPU and GPU.

Usage:
  - Enable via environment variable MERLIN_PROFILE_MEMORY=1 (or any truthy value)
  - Wrap code with MemoryMonitor context manager or call start()/stop().

This module avoids hard dependencies: psutil is optional. If available, RSS is
reported; otherwise, only Python allocations (tracemalloc) and CUDA stats are shown.
"""

from __future__ import annotations

import os
import time
from dataclasses import dataclass
from typing import Any, Callable, Optional

import tracemalloc

try:
    import torch  # type: ignore
except Exception:  # pragma: no cover - torch may be unavailable in some env
    torch = None  # type: ignore[assignment]

try:
    import psutil  # type: ignore
except Exception:  # pragma: no cover - optional dependency
    psutil = None  # type: ignore[assignment]


def _env_enabled() -> bool:
    val = os.getenv("MERLIN_PROFILE_MEMORY", "")
    return val not in ("", "0", "false", "False", "no", "None")


def _get_rss_bytes() -> Optional[int]:
    if psutil is None:
        return None
    try:
        proc = psutil.Process()
        return int(proc.memory_info().rss)
    except Exception:
        return None


def _get_cuda_mem() -> tuple[Optional[int], Optional[int]]:
    if torch is None:
        return None, None
    try:
        if torch.cuda.is_available():
            device = torch.cuda.current_device()
            allocated = int(torch.cuda.memory_allocated(device))
            reserved = int(torch.cuda.memory_reserved(device))
            return allocated, reserved
    except Exception:
        pass
    return None, None


@dataclass
class MemorySnapshot:
    timestamp: float
    rss_bytes: Optional[int]
    tracemalloc_current: Optional[int]
    tracemalloc_peak: Optional[int]
    cuda_allocated: Optional[int]
    cuda_reserved: Optional[int]


def take_snapshot(sync_cuda: bool = True) -> MemorySnapshot:
    if torch is not None and sync_cuda:
        try:
            if torch.cuda.is_available():
                torch.cuda.synchronize()
        except Exception:
            pass
    if not tracemalloc.is_tracing():
        try:
            tracemalloc.start()
        except Exception:
            # best effort
            pass
    current, peak = (None, None)
    try:
        current, peak = tracemalloc.get_traced_memory()
    except Exception:
        pass

    rss = _get_rss_bytes()
    allocated, reserved = _get_cuda_mem()
    return MemorySnapshot(
        timestamp=time.time(),
        rss_bytes=rss,
        tracemalloc_current=int(current) if current is not None else None,
        tracemalloc_peak=int(peak) if peak is not None else None,
        cuda_allocated=allocated,
        cuda_reserved=reserved,
    )


def _fmt_bytes(value: Optional[int]) -> str:
    if value is None:
        return "-"
    # human readable (MiB)
    return f"{value / (1024**2):.2f} MiB"


def diff_snapshots(a: MemorySnapshot, b: MemorySnapshot) -> dict[str, Any]:
    return {
        "dt_s": b.timestamp - a.timestamp,
        "rss_before": _fmt_bytes(a.rss_bytes),
        "rss_after": _fmt_bytes(b.rss_bytes),
        "rss_delta": _fmt_bytes(
            None if a.rss_bytes is None or b.rss_bytes is None else b.rss_bytes - a.rss_bytes
        ),
        "py_alloc_before": _fmt_bytes(a.tracemalloc_current),
        "py_alloc_after": _fmt_bytes(b.tracemalloc_current),
        "py_alloc_delta": _fmt_bytes(
            None
            if a.tracemalloc_current is None or b.tracemalloc_current is None
            else b.tracemalloc_current - a.tracemalloc_current
        ),
        "cuda_alloc_before": _fmt_bytes(a.cuda_allocated),
        "cuda_alloc_after": _fmt_bytes(b.cuda_allocated),
        "cuda_alloc_delta": _fmt_bytes(
            None
            if a.cuda_allocated is None or b.cuda_allocated is None
            else b.cuda_allocated - a.cuda_allocated
        ),
        "cuda_reserved_before": _fmt_bytes(a.cuda_reserved),
        "cuda_reserved_after": _fmt_bytes(b.cuda_reserved),
        "cuda_reserved_delta": _fmt_bytes(
            None
            if a.cuda_reserved is None or b.cuda_reserved is None
            else b.cuda_reserved - a.cuda_reserved
        ),
    }


class MemoryMonitor:
    """Context manager/utility to log memory usage between two points.

    Enable via env MERLIN_PROFILE_MEMORY=1. By défaut, utilise print(); on peut
    fournir une fonction de log custom via log_fn.
    """

    def __init__(
        self,
        label: str,
        *,
        enabled: Optional[bool] = None,
        sync_cuda: bool = True,
        log_fn: Optional[Callable[[str], None]] = None,
    ) -> None:
        self.label = label
        self.enabled = _env_enabled() if enabled is None else bool(enabled)
        self.sync_cuda = sync_cuda
        self._start: Optional[MemorySnapshot] = None
        self._end: Optional[MemorySnapshot] = None
        self._log = log_fn or (lambda msg: print(msg))

    @staticmethod
    def is_enabled() -> bool:
        return _env_enabled()

    def start(self) -> None:
        if not self.enabled:
            return
        self._start = take_snapshot(self.sync_cuda)

    def stop(self) -> dict[str, Any] | None:
        if not self.enabled:
            return None
        self._end = take_snapshot(self.sync_cuda)
        if self._start is None:
            return None
        diff = diff_snapshots(self._start, self._end)
        self._log(
            (
                f"[MemoryMonitor] {self.label}: dt={diff['dt_s']:.3f}s, "
                f"RSS {diff['rss_before']} -> {diff['rss_after']} (Δ {diff['rss_delta']}), "
                f"Py {diff['py_alloc_before']} -> {diff['py_alloc_after']} (Δ {diff['py_alloc_delta']}), "
                f"CUDA alloc {diff['cuda_alloc_before']} -> {diff['cuda_alloc_after']} (Δ {diff['cuda_alloc_delta']}), "
                f"CUDA reserved {diff['cuda_reserved_before']} -> {diff['cuda_reserved_after']} (Δ {diff['cuda_reserved_delta']})"
            )
        )
        return diff

    # Context manager support
    def __enter__(self) -> "MemoryMonitor":
        self.start()
        return self

    def __exit__(self, exc_type, exc, tb) -> None:  # type: ignore[override]
        self.stop()
