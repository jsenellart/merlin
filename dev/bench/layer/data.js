window.BENCHMARK_DATA = {
  "lastUpdate": 1762529175712,
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
        "date": 1762529174482,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config0]",
            "value": 277.8247357117215,
            "unit": "iter/sec",
            "range": "stddev: 0.000039109521591098466",
            "extra": "mean: 3.5993915280374007 msec\nrounds: 214"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config1]",
            "value": 118.2722429767079,
            "unit": "iter/sec",
            "range": "stddev: 0.00010449386419339757",
            "extra": "mean: 8.455069210084536 msec\nrounds: 119"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config2]",
            "value": 50.61132536510841,
            "unit": "iter/sec",
            "range": "stddev: 0.0024087802597202467",
            "extra": "mean: 19.75842349090907 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_quantum_layer_forward_benchmark[cpu-config3]",
            "value": 20.975843052121625,
            "unit": "iter/sec",
            "range": "stddev: 0.001887064648526448",
            "extra": "mean: 47.67388836363618 msec\nrounds: 22"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config0]",
            "value": 296.17259665385455,
            "unit": "iter/sec",
            "range": "stddev: 0.00013217842905449497",
            "extra": "mean: 3.3764096047303416 msec\nrounds: 296"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config1]",
            "value": 138.8085229312163,
            "unit": "iter/sec",
            "range": "stddev: 0.00007582406826392004",
            "extra": "mean: 7.204168583333527 msec\nrounds: 144"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config2]",
            "value": 77.22058769642463,
            "unit": "iter/sec",
            "range": "stddev: 0.00020107252966641186",
            "extra": "mean: 12.949914392406273 msec\nrounds: 79"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-8-config3]",
            "value": 48.27015115851877,
            "unit": "iter/sec",
            "range": "stddev: 0.0005010354129736817",
            "extra": "mean: 20.716736450979997 msec\nrounds: 51"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config0]",
            "value": 287.4743728290153,
            "unit": "iter/sec",
            "range": "stddev: 0.000044010547725638845",
            "extra": "mean: 3.478570942373296 msec\nrounds: 295"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config1]",
            "value": 135.61026794965338,
            "unit": "iter/sec",
            "range": "stddev: 0.0003796895124854418",
            "extra": "mean: 7.374072886363293 msec\nrounds: 132"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config2]",
            "value": 75.7846229037943,
            "unit": "iter/sec",
            "range": "stddev: 0.0003135905404063053",
            "extra": "mean: 13.195288987179655 msec\nrounds: 78"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-16-config3]",
            "value": 46.836242232928726,
            "unit": "iter/sec",
            "range": "stddev: 0.00040083578066135126",
            "extra": "mean: 21.35098702040915 msec\nrounds: 49"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config0]",
            "value": 281.4746571834673,
            "unit": "iter/sec",
            "range": "stddev: 0.00004432261361042166",
            "extra": "mean: 3.552717711805197 msec\nrounds: 288"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config1]",
            "value": 131.11614477794933,
            "unit": "iter/sec",
            "range": "stddev: 0.000544623345822064",
            "extra": "mean: 7.62682583211657 msec\nrounds: 137"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config2]",
            "value": 73.13366499729777,
            "unit": "iter/sec",
            "range": "stddev: 0.00019747381293410115",
            "extra": "mean: 13.673593413333645 msec\nrounds: 75"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-32-config3]",
            "value": 43.683715526715986,
            "unit": "iter/sec",
            "range": "stddev: 0.0006487749768059353",
            "extra": "mean: 22.891825659573815 msec\nrounds: 47"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config0]",
            "value": 273.60986487259675,
            "unit": "iter/sec",
            "range": "stddev: 0.00003849886400800479",
            "extra": "mean: 3.6548389820141844 msec\nrounds: 278"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config1]",
            "value": 126.74636131489417,
            "unit": "iter/sec",
            "range": "stddev: 0.000057686238983394105",
            "extra": "mean: 7.889772847328977 msec\nrounds: 131"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config2]",
            "value": 67.21407478155632,
            "unit": "iter/sec",
            "range": "stddev: 0.0007133504670518659",
            "extra": "mean: 14.877836275363 msec\nrounds: 69"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_batched_computation_benchmark[cpu-64-config3]",
            "value": 38.97358762110566,
            "unit": "iter/sec",
            "range": "stddev: 0.0008399375315627306",
            "extra": "mean: 25.658402549999337 msec\nrounds: 40"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config0]",
            "value": 131.5629711778344,
            "unit": "iter/sec",
            "range": "stddev: 0.00004495443363479622",
            "extra": "mean: 7.600922896825538 msec\nrounds: 126"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_gradient_computation_benchmark[cpu-config1]",
            "value": 54.09450446247583,
            "unit": "iter/sec",
            "range": "stddev: 0.00015842877246343185",
            "extra": "mean: 18.486166200000557 msec\nrounds: 55"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config0]",
            "value": 29.507685019354707,
            "unit": "iter/sec",
            "range": "stddev: 0.0011765378105190215",
            "extra": "mean: 33.88947656666659 msec\nrounds: 30"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_multiple_circuit_types_benchmark[cpu-config1]",
            "value": 12.2885573398731,
            "unit": "iter/sec",
            "range": "stddev: 0.0018277647181359122",
            "extra": "mean: 81.37651738461325 msec\nrounds: 13"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config0]",
            "value": 19.806127863349055,
            "unit": "iter/sec",
            "range": "stddev: 0.0015729014373352614",
            "extra": "mean: 50.48942463158007 msec\nrounds: 19"
          },
          {
            "name": "benchmarks/benchmark_layer.py::test_output_mapping_strategies_benchmark[cpu-config1]",
            "value": 7.351756138249496,
            "unit": "iter/sec",
            "range": "stddev: 0.04148173179265118",
            "extra": "mean: 136.02192200000079 msec\nrounds: 9"
          }
        ]
      }
    ]
  }
}