window.BENCHMARK_DATA = {
  "lastUpdate": 1762529168261,
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
        "date": 1762529167713,
        "tool": "pytest",
        "benches": [
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config0]",
            "value": 17104.63399205076,
            "unit": "iter/sec",
            "range": "stddev: 0.00003571938888676536",
            "extra": "mean: 58.46368887312888 usec\nrounds: 2822"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config1]",
            "value": 6063.472169950089,
            "unit": "iter/sec",
            "range": "stddev: 0.000045340859574220744",
            "extra": "mean: 164.92200705659897 usec\nrounds: 4818"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config2]",
            "value": 1505.4341433520517,
            "unit": "iter/sec",
            "range": "stddev: 0.00006842256264202427",
            "extra": "mean: 664.2602098643555 usec\nrounds: 1034"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair0-cpu-config3]",
            "value": 287.77953585120395,
            "unit": "iter/sec",
            "range": "stddev: 0.005369697313981217",
            "extra": "mean: 3.4748822463771325 msec\nrounds: 276"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config0]",
            "value": 17278.792278457262,
            "unit": "iter/sec",
            "range": "stddev: 0.000029095359066703056",
            "extra": "mean: 57.87441528808546 usec\nrounds: 10819"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config1]",
            "value": 6051.963664861413,
            "unit": "iter/sec",
            "range": "stddev: 0.00004565019028600519",
            "extra": "mean: 165.23562522461037 usec\nrounds: 5011"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config2]",
            "value": 1490.4807008788314,
            "unit": "iter/sec",
            "range": "stddev: 0.00006212277264154089",
            "extra": "mean: 670.9244872545954 usec\nrounds: 1020"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_build_graph_benchmark[dtype_pair1-cpu-config3]",
            "value": 261.70223861979525,
            "unit": "iter/sec",
            "range": "stddev: 0.007873810229162115",
            "extra": "mean: 3.8211365912418285 msec\nrounds: 274"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config0]",
            "value": 9182.680532987837,
            "unit": "iter/sec",
            "range": "stddev: 0.000007917063629164118",
            "extra": "mean: 108.90066320042416 usec\nrounds: 1731"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config1]",
            "value": 6341.304526094249,
            "unit": "iter/sec",
            "range": "stddev: 0.000012162353242245765",
            "extra": "mean: 157.6962588510037 usec\nrounds: 4265"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config2]",
            "value": 4111.312385991705,
            "unit": "iter/sec",
            "range": "stddev: 0.00003460619540802393",
            "extra": "mean: 243.23133493997105 usec\nrounds: 3320"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair0-cpu-config3]",
            "value": 2024.070066643977,
            "unit": "iter/sec",
            "range": "stddev: 0.00001638928518327533",
            "extra": "mean: 494.05404312809026 usec\nrounds: 1739"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config0]",
            "value": 9175.383132125815,
            "unit": "iter/sec",
            "range": "stddev: 0.00000821657466710579",
            "extra": "mean: 108.98727449306122 usec\nrounds: 5869"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config1]",
            "value": 6362.29134150344,
            "unit": "iter/sec",
            "range": "stddev: 0.000010348363315507927",
            "extra": "mean: 157.17607797628693 usec\nrounds: 5040"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config2]",
            "value": 3988.9825557161666,
            "unit": "iter/sec",
            "range": "stddev: 0.00002268285643968599",
            "extra": "mean: 250.69049213238884 usec\nrounds: 2987"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_benchmark[dtype_pair1-cpu-config3]",
            "value": 1852.0299669652536,
            "unit": "iter/sec",
            "range": "stddev: 0.0000181807285616774",
            "extra": "mean: 539.9480666279959 usec\nrounds: 1711"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config0]",
            "value": 9467.06782168741,
            "unit": "iter/sec",
            "range": "stddev: 0.000007980765770079009",
            "extra": "mean: 105.62932671816014 usec\nrounds: 6651"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair0-cpu-config1]",
            "value": 6673.492465195236,
            "unit": "iter/sec",
            "range": "stddev: 0.000009836255240188882",
            "extra": "mean: 149.84657661867075 usec\nrounds: 5175"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config0]",
            "value": 9324.759159995749,
            "unit": "iter/sec",
            "range": "stddev: 0.000008236142702596942",
            "extra": "mean: 107.24137565827019 usec\nrounds: 6836"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[8-dtype_pair1-cpu-config1]",
            "value": 6658.320287472163,
            "unit": "iter/sec",
            "range": "stddev: 0.000010687119099641129",
            "extra": "mean: 150.18802893599621 usec\nrounds: 5253"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config0]",
            "value": 9255.018285875303,
            "unit": "iter/sec",
            "range": "stddev: 0.000007956580873579336",
            "extra": "mean: 108.04948938093035 usec\nrounds: 6639"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair0-cpu-config1]",
            "value": 6101.086076895635,
            "unit": "iter/sec",
            "range": "stddev: 0.00002843409061414901",
            "extra": "mean: 163.90524365603144 usec\nrounds: 5044"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config0]",
            "value": 9086.840658288145,
            "unit": "iter/sec",
            "range": "stddev: 0.000011072449852100374",
            "extra": "mean: 110.04925007548094 usec\nrounds: 6618"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[16-dtype_pair1-cpu-config1]",
            "value": 6236.0713449770765,
            "unit": "iter/sec",
            "range": "stddev: 0.000009994033651182218",
            "extra": "mean: 160.35736999793352 usec\nrounds: 4773"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config0]",
            "value": 8850.527200897308,
            "unit": "iter/sec",
            "range": "stddev: 0.000008707645741232194",
            "extra": "mean: 112.98761952831639 usec\nrounds: 6237"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair0-cpu-config1]",
            "value": 5901.758875778226,
            "unit": "iter/sec",
            "range": "stddev: 0.00001143664054111861",
            "extra": "mean: 169.44101259442533 usec\nrounds: 3970"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config0]",
            "value": 8607.515009848472,
            "unit": "iter/sec",
            "range": "stddev: 0.000010591993398252868",
            "extra": "mean: 116.17754936887461 usec\nrounds: 5783"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[32-dtype_pair1-cpu-config1]",
            "value": 5680.478821945721,
            "unit": "iter/sec",
            "range": "stddev: 0.000011538228107124156",
            "extra": "mean: 176.0414977935737 usec\nrounds: 4532"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config0]",
            "value": 8365.538323984809,
            "unit": "iter/sec",
            "range": "stddev: 0.000012009997271407566",
            "extra": "mean: 119.53803345002952 usec\nrounds: 5142"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair0-cpu-config1]",
            "value": 5178.291799895746,
            "unit": "iter/sec",
            "range": "stddev: 0.000011656086664034921",
            "extra": "mean: 193.11387589632025 usec\nrounds: 4045"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config0]",
            "value": 8236.8557889334,
            "unit": "iter/sec",
            "range": "stddev: 0.000009566359493662494",
            "extra": "mean: 121.40554911056553 usec\nrounds: 5172"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[64-dtype_pair1-cpu-config1]",
            "value": 4959.953036985552,
            "unit": "iter/sec",
            "range": "stddev: 0.00000979914419955925",
            "extra": "mean: 201.6148121853503 usec\nrounds: 3972"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config0]",
            "value": 7790.199165608279,
            "unit": "iter/sec",
            "range": "stddev: 0.000007975454176665991",
            "extra": "mean: 128.36642282712643 usec\nrounds: 5546"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair0-cpu-config1]",
            "value": 4199.926279192547,
            "unit": "iter/sec",
            "range": "stddev: 0.000016513048164931457",
            "extra": "mean: 238.0994173526908 usec\nrounds: 3400"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config0]",
            "value": 7501.338507701716,
            "unit": "iter/sec",
            "range": "stddev: 0.000011883708516312517",
            "extra": "mean: 133.30954188686295 usec\nrounds: 4918"
          },
          {
            "name": "benchmarks/benchmark_slos_core.py::test_compute_batched_benchmark[128-dtype_pair1-cpu-config1]",
            "value": 3874.404472020144,
            "unit": "iter/sec",
            "range": "stddev: 0.000011421581474537616",
            "extra": "mean: 258.10418277743526 usec\nrounds: 2938"
          }
        ]
      }
    ]
  }
}