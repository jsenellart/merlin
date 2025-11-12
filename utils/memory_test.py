import os
import argparse

import merlin as ML
import perceval as pcvl
import torch

from merlin.utils.memory import MemoryMonitor


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Memory profiling for QuantumLayer")
    parser.add_argument(
        "-n",
        "--photons",
        type=int,
        required=True,
        help="Number of photons (n)",
    )
    parser.add_argument(
        "-m",
        "--modes",
        type=int,
        default=None,
        help="Number of modes (m). Defaults to 2*n if not provided.",
    )
    parser.add_argument(
        "-b",
        "--batch",
        type=int,
        default=None,
        help="Batch size for input. Defaults to 1 if not provided.",
    )
    return parser.parse_args()


def main():
    args = parse_args()
    # Ensure prints even if env var not set

    n = int(args.photons)
    m = int(args.modes) if args.modes is not None else 2 * n
    batch = int(args.batch) if args.batch is not None else 1

    print(f"[memory_test] Running with m={m}, n={n}")

    circuit = pcvl.Circuit(m)
    circuit.add(0,pcvl.Unitary(pcvl.Matrix.random_unitary(m)))
    for mode in range(m):
        circuit.add(mode, pcvl.PS(pcvl.P(f"phi_{mode}")))
    circuit.add(0, pcvl.Unitary(pcvl.Matrix.random_unitary(m)))


    # Measure initialization
    with MemoryMonitor(f"QuantumLayer init (m={m}, n={n})", enabled=True):
        layer = ML.QuantumLayer(circuit=circuit, n_photons=n, input_parameters=["phi"])

    # Measure a forward pass (no classical inputs needed for this simple circuit)
    with MemoryMonitor(f"QuantumLayer forward (m={m}, n={n})", enabled=True):
        input = torch.randn(batch, layer.input_size)
        _ = layer(input)


if __name__ == "__main__":
    main()
