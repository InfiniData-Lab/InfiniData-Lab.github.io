---
name: QEC Lake
tagline: Data infrastructure for quantum error correction
status: active
order: 1
featured: true
pillars:
  - Quantum Data Management
  - AI in Data Lakes
tags:
  - Quantum error correction
  - Data lakes
  - Dataset discovery
venue: PVLDB 2026
award: ''
publications:
  - qec-lake
image: ''
links:
  github: ''
  paper: https://www.vldb.org/pvldb/vol19/p4574-hai.pdf
  dataset: ''
  demo: https://youtu.be/V8lXy5H3e6k
  website: ''
---

QEC Lake brings experimental, simulated, and synthetic quantum error-correction data into a
shared data lake. Researchers can discover datasets through metadata search and an AI-assisted
interface, then export model-ready inputs for decoder training and evaluation.

Its preparation pipeline supports different model families without requiring a separate
conversion script for every dataset and model. QEC Lake supplies the data foundation for
the [QEC Model Zoo](/qec-model-zoo) and reproducible comparisons across decoders.
