---
publishDate: 2024-04-04T00:00:00Z
title: "SiloFuse: Cross-silo Synthetic Data Generation with Latent Tabular Diffusion Models"
excerpt: Privacy-preserving synthesis of feature-partitioned data
image: ~/assets/images/project/silofuse/latentddpm.png
category: federated-learning
tags:
  - machine-learning
  - federated-learning
  - distributed-databases
  - data-privacy
metadata:
  canonical: https://astrowind.vercel.app/amalur
---


## Abstract
The paper introduces a new method called _SiloFuse_, which addresses the challenge of creating realistic synthetic data from multiple sources while preserving privacy. Unlike existing methods designed for centrally stored data, SiloFuse is tailored for scenarios where data features are distributed across various silos, necessitating on-premise data storage. It utilizes a **distributed latent tabular diffusion** architecture to ensure privacy. This involves using autoencoders to learn latent representations of each client's features, effectively masking their actual values. Through **stacked distributed training**, communication efficiency is improved, reducing the number of training rounds to a single step. The paper demonstrates SiloFuse's effectiveness through experimental results on nine datasets, showing its superiority over centralized diffusion-based synthesizers. Notably, SiloFuse outperforms GANs in resemblance and utility by 43.8% and 29.8%, respectively. Additionally, SiloFuse is robust to feature permutations and varying numbers of clients. Overall, SiloFuse offers a promising solution for generating high-quality synthetic data from cross-silo tabular data while maintaining privacy and efficiency.
  



## Example

Consider a scenario where two healthcare providers collaborate: a cardiac center and a psychiatric facility. Each collects different client features; for instance, the cardiac center may gather heart rate data while the psychiatric facility records stress levels. By sharing this data, they could create a model to classify patient risk levels, identifying patterns like high heart rates and stress levels indicating high risk. However, privacy regulations prevent direct data sharing. Synthetic data offers a solution, but how can we generate it _without compromising privacy_?

SiloFuse features a cross-silo synthesizer that generates synthetic samples without exposing individual features. It employs autoencoders at each client to transform real data into a hidden space. A server, equipped with a denoising diffusion probabilistic model (DDPM), captures correlations across features in this hidden space to create new samples. The synthesized data is then decoded at each client, ensuring the server never sees the real features. In this way, SiloFuse provides a secure method for collaborative data analysis, maintaining privacy while enabling valuable insights from joint data.
  

![Target](~/assets/images/project/silofuse/silofuse.png)