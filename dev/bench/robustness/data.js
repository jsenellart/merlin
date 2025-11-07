window.BENCHMARK_DATA = {
  "lastUpdate": 1762529188340,
  "repoUrl": "https://github.com/jsenellart/merlin",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "94611630+CassNot@users.noreply.github.com",
            "name": "Cassandre Notton",
            "username": "CassNot"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "8929e8383a044816615efb10b33ac00913000088",
          "message": "Merge pull request #74 from merlinquantum/bugfix/packaging\n\nadded missing packages",
          "timestamp": "2025-11-05T06:37:46-05:00",
          "tree_id": "04d767a9eab53f82709564a69e1564af7bbca635",
          "url": "https://github.com/jsenellart/merlin/commit/8929e8383a044816615efb10b33ac00913000088"
        },
        "date": 1762529187615,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config0]",
            "value": 106.41630844521191,
            "unit": "iter/sec",
            "range": "stddev: 0.0002214448658088823",
            "extra": "mean: 9.397055908163237 msec\nrounds: 98"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config1]",
            "value": 45.780578554678975,
            "unit": "iter/sec",
            "range": "stddev: 0.00040510992112554396",
            "extra": "mean: 21.843323775509507 msec\nrounds: 49"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-64-config2]",
            "value": 19.074691775822206,
            "unit": "iter/sec",
            "range": "stddev: 0.001316771285269476",
            "extra": "mean: 52.425486700001755 msec\nrounds: 20"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config0]",
            "value": 95.7239940227941,
            "unit": "iter/sec",
            "range": "stddev: 0.00023376618715547297",
            "extra": "mean: 10.446701584159523 msec\nrounds: 101"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config1]",
            "value": 39.5068709008496,
            "unit": "iter/sec",
            "range": "stddev: 0.0022704236736797874",
            "extra": "mean: 25.31205274418468 msec\nrounds: 43"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-128-config2]",
            "value": 16.576931606993835,
            "unit": "iter/sec",
            "range": "stddev: 0.0009192358465653534",
            "extra": "mean: 60.32479494444547 msec\nrounds: 18"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config0]",
            "value": 83.54801432784635,
            "unit": "iter/sec",
            "range": "stddev: 0.00022897904726537716",
            "extra": "mean: 11.969165372093139 msec\nrounds: 86"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config1]",
            "value": 34.018985320998624,
            "unit": "iter/sec",
            "range": "stddev: 0.0002144856835210134",
            "extra": "mean: 29.395350583332597 msec\nrounds: 36"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-256-config2]",
            "value": 13.514993392244538,
            "unit": "iter/sec",
            "range": "stddev: 0.0015663056622782906",
            "extra": "mean: 73.99189707142894 msec\nrounds: 14"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config0]",
            "value": 65.44973755881995,
            "unit": "iter/sec",
            "range": "stddev: 0.0003649711006136786",
            "extra": "mean: 15.278900073530407 msec\nrounds: 68"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config1]",
            "value": 25.646421765072873,
            "unit": "iter/sec",
            "range": "stddev: 0.00016954753738671174",
            "extra": "mean: 38.991794222220555 msec\nrounds: 27"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_large_batch_robustness_benchmark[cpu-512-config2]",
            "value": 9.850458417678576,
            "unit": "iter/sec",
            "range": "stddev: 0.004350204465737121",
            "extra": "mean: 101.51811800000132 msec\nrounds: 11"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config0]",
            "value": 17.478382079305334,
            "unit": "iter/sec",
            "range": "stddev: 0.004738733997678124",
            "extra": "mean: 57.21353357894693 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config1]",
            "value": 8.093519437242211,
            "unit": "iter/sec",
            "range": "stddev: 0.0006463833615203523",
            "extra": "mean: 123.55564322221981 msec\nrounds: 9"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_extreme_values_robustness_benchmark[cpu-config2]",
            "value": 3.3890702768254433,
            "unit": "iter/sec",
            "range": "stddev: 0.0023579118675585145",
            "extra": "mean: 295.0661739999987 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config0]",
            "value": 8.270678737634011,
            "unit": "iter/sec",
            "range": "stddev: 0.0006958143903355217",
            "extra": "mean: 120.90906100000076 msec\nrounds: 8"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_numerical_stability_benchmark[cpu-config1]",
            "value": 3.4799603296772,
            "unit": "iter/sec",
            "range": "stddev: 0.0004623709028582183",
            "extra": "mean: 287.359597599999 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config0]",
            "value": 1.6908458674029632,
            "unit": "iter/sec",
            "range": "stddev: 0.005607912231553326",
            "extra": "mean: 591.4199628000034 msec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_memory_efficiency_benchmark[cpu-config1]",
            "value": 0.7229472713905083,
            "unit": "iter/sec",
            "range": "stddev: 0.001870094205079793",
            "extra": "mean: 1.3832267436000023 sec\nrounds: 5"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config0]",
            "value": 16.679024957505042,
            "unit": "iter/sec",
            "range": "stddev: 0.0003495858787563768",
            "extra": "mean: 59.95554311764676 msec\nrounds: 17"
          },
          {
            "name": "benchmarks/benchmark_robustness.py::test_hybrid_model_stress_benchmark[cpu-config1]",
            "value": 7.477478442476262,
            "unit": "iter/sec",
            "range": "stddev: 0.0005267035998214332",
            "extra": "mean: 133.7349225000022 msec\nrounds: 8"
          }
        ]
      }
    ]
  }
}