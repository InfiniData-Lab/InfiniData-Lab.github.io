# Publication count audit — 7 September 2026

The updated catalogue contains **20 distinct conference publications from 2023–2026** across its venues. **12** are specifically at SIGMOD, VLDB/PVLDB, or ICDE. The homepage's requested “Top Conferences” wording uses the broader conference total; it must not be described as 20 SIGMOD/VLDB/ICDE papers or 20 full research papers.

## Counting rules

- Count one catalogue record per distinct work, not one listing per coauthor or Google Scholar entry.
- Include conference papers, demonstrations, tutorials, and doctoral/symposium papers. PVLDB is conference proceedings even when a record is typed as a journal article.
- Exclude standalone journal articles (including TKDE and DAPD), workshops, preprints, pre-2023 work, and future conference editions such as InferQ at SIGMOD 2027.
- Keep one record per paper, using its published DOI or PDF. Keep an arXiv link only when no published version is confirmed. The counter also suppresses duplicate DOI, normalized title, or arXiv identifier, including arXiv version suffixes.
- The count describes the curated lab catalogue, not an exhaustive bibliometric claim about every current member's career. All 20 counted records include Rihan Hai as an author; do not add unrelated member papers solely to increase the total.
- The count is calculated by `src/lib/content/publication-stats.ts`; wording and starting year are editable in **Site settings → Homepage** in Sveltia CMS.

## Sources and corrections

Google Scholar returned HTTP 403, so its complete listing could not be directly audited. Cross-checks used [Rihan Hai's current publication list](https://rihanhai.com/publications/), [her TU Delft WIS profile](https://www.wis.ewi.tudelft.nl/hai), [the previous team publication list](https://infinidata-team.github.io/publications/), and the publisher links in the table below.

- [SIGMOD 2026's accepted papers](https://2026.sigmod.org/sigmod_papers.shtml) and Rihan's publication list place TranSQL+ and WaveStitch in the **2026 conference edition**. Their PACMMOD publication year is 2025; these are not separate papers.
- The [official SIGMOD 2025 awards](https://2025.sigmod.org/sigmod_awards.shtml) confirm Database as Runtime as a Best Demo runner-up. The demo remains a 2025 record, distinct from TranSQL+.
- Updated Harpoon from an arXiv-only entry to ICLR 2026, replacing its arXiv link with its [OpenReview paper](https://openreview.net/pdf?id=G5g6tDg1ZE).
- Removed arXiv links from nine papers with confirmed published versions: Accelerating machine learning queries, Harpoon, Ilargi, LLM-PQA, Model Selection with Model Zoo, Quantum Data Management: From Theory to Opportunities, Qymera, WaveStitch, and SiloFuse. SiloFuse's [TU Delft publication record](https://research.tudelft.nl/en/publications/silofuse-cross-silo-synthetic-data-generation-with-latent-tabular/) confirms the added DOI, [10.1109/ICDE60146.2024.00016](https://doi.org/10.1109/ICDE60146.2024.00016).
- Retained arXiv links for CEBench, IMLP, Private Quantum Database, and Quadratic Sums-of-Powers for Fixed-Parameter Tractable Quantum-Circuit Simulation because no published version was confirmed. Private Quantum Database's QIP 2026 poster is non-archival.
- Added QEC lake, the VLDB 2026 demo listed on Rihan's publication page. No unverified DOI or PDF URL was invented.
- Corrected the 2023 Data Lakes survey DOI to [10.1109/TKDE.2023.3270101](https://doi.org/10.1109/TKDE.2023.3270101). The previous DOI referred to its 2024 ICDE extended abstract; the survey is retained once as a standalone journal article and excluded from this conference count.
- Ilargi is from the WISE 2025 PhD Symposium proceedings (published in 2026); Cross-Source ML Model Training is an ICDE symposium paper. These contribute to the broad conference-output total, not a full-research-paper total.

## Counted records

| Year / edition | Publication | Venue | Source |
| --- | --- | --- | --- |
| 2023 | Amalur: Data Integration Meets Machine Learning | ICDE | [Record](https://doi.org/10.1109/ICDE55515.2023.00301) |
| 2023 | Macaroni: Crawling and Enriching Metadata from Public Model Zoos | ICWE | [Record](https://doi.org/10.1007/978-3-031-34444-2_31) |
| 2023 | Optimizing ML Inference Queries Under Constraints | ICWE | [Record](https://doi.org/10.1007/978-3-031-34444-2_4) |
| 2024 | AutoFeat: Transitive Feature Discovery over Join Paths | ICDE | [Record](https://doi.org/10.1109/ICDE60146.2024.00150) |
| 2024 | Cross-Source ML Model Training | ICDE | [Record](https://doi.org/10.1109/ICDE60146.2024.00464) |
| 2024 | Human-in-the-Loop Feature Discovery for Tabular Data | CIKM | [Record](https://doi.org/10.1145/3627673.3679211) |
| 2024 | LLM-PQA: LLM-enhanced Prediction Query Answering | CIKM | [Record](https://doi.org/10.1145/3627673.3679210) |
| 2024 | Model Selection with Model Zoo via Graph Learning | ICDE | [Record](https://doi.org/10.1109/ICDE60146.2024.00088) |
| 2024 | Quantum Data Management: From Theory to Opportunities | ICDE | [Record](https://doi.org/10.1109/ICDE60146.2024.00410) |
| 2024 | SiloFuse: Cross-silo Synthetic Data Generation with Latent Tabular Diffusion Models | ICDE | [Record](https://doi.org/10.1109/ICDE60146.2024.00016) |
| 2025 | Database as Runtime: Compiling LLMs to SQL for In-database Model Serving | SIGMOD | [Record](https://doi.org/10.1145/3722212.3725093) |
| 2025 | Database is All You Need: Serving LLMs with Relational Queries | EDBT | [Record](https://doi.org/10.48786/edbt.2025.103) |
| 2025 | Ilargi: A GPU Compatible Factorized ML Model Training Framework | WISE | [Record](https://doi.org/10.1007/978-981-95-7394-3_2) |
| 2025 | Quantum Data Management in the NISQ Era | PVLDB | [Record](https://doi.org/10.14778/3725688.3725701) |
| 2025 | Qymera: Simulating Quantum Circuits using RDBMS | SIGMOD | [Record](https://doi.org/10.1145/3722212.3725126) |
| 2025 | Share Secrets for Privacy: Confidential Forecasting with Vertical Federated Learning | ARES | [Record](https://doi.org/10.1007/978-3-032-00624-0_18) |
| 2026 | Harpoon: Generalised Manifold Guidance for Conditional Tabular Diffusion | ICLR | [Record](https://openreview.net/pdf?id=G5g6tDg1ZE) |
| 2026 | QEC lake: Data Lake for AI-enhanced Quantum Error Correction | PVLDB | [Record](https://rihanhai.com/publications/) |
| 2026 | TranSQL+: Serving Large Language Models with SQL on Low-Resource Hardware | SIGMOD | [Record](https://doi.org/10.1145/3769836) |
| 2026 | WaveStitch: Flexible and Fast Conditional Time Series Generation With Diffusion Models | SIGMOD | [Record](https://doi.org/10.1145/3769842) |

## Homepage news sources

- TranSQL+ and WaveStitch announcement: SIGMOD 2026 accepted-papers list above; dated to the conference's opening day, [31 May 2026](https://2026.sigmod.org/).
- DATAI talk: the [5 September 2025 workshop programme](https://data-drivenai.github.io/2025/) lists Rihan Hai's invited talk, “Databases as AI Runtimes”.
- SIGMOD demo award: official awards page above; the news date uses the conference's closing day for the recap, not an asserted award-ceremony date.
