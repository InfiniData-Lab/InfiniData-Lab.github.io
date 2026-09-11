---
title: Special Guest Lecture
type: talk
startDate: 2026-09-15
endDate: 2026-09-15
location: Lecture Hall Ampere EEMCS Building at TU Delft
people:
  - Professor Michael Benedikt
  - Associate Professor Mahmoud Abo Khamis
featured: false
links: null
---

# **Logic, databases, machine learning—and life beyond campus**

Tuesday, **15 September at 15:45**, during our regular lecture, we will welcome two guests from the University of Oxford:

### **Professor Michael Benedikt**

_How (and When) Can We Train Logically Defined Hypothesis Classes?_

Michael will examine a fundamental question: if a family of machine-learning models is described using logic, can we determine whether one of those models fits a given dataset—and how efficiently?

The talk will connect logic, computational complexity, relational algebra and machine learning. In some important cases, the training problem can even be solved by evaluating a database query over the sample.

#### Abstract:

A hypothesis class is a family of functions from some infinite domain (integers, reals, strings) into the reals. The functions in the class are called hypotheses. There is a basic computational problem for such a class, sometimes called “fitting” and sometimes called “training”. The input to the problem is a finite sample consisting of input/output pairs, along with a tolerance. The goal is to determine whether there is a member of the class such that the total error of the hypothesis with respect to the sample is at most the tolerance. Here by “total error” we consider a number of options, but the most common choice is mean square distance between the sample vector and the restriction of the hypothesis to the inputs in the sample.

It is known that if a hypothesis class is learnable in the standard Probably Almost Correct (PAC) model, then the complexity of learning reduces in polynomial time to the complexity of the training problem.

We look at the training problem for classes of function described via logical formulas over real or integer arithmetic. An example of such a class would be feedforward neural networks with a fixed set of parameters over the reals or over the integers. Another example would be neural networks that use sigmoid activations,  again with a fixed number of parameters.

We give results showing that the training problem is decidable in polynomial space in the size of the sample. and also provide some important cases where it is solvable in polynomial time in the size of the sample.  We isolate cases where we can use a database query (e.g. in relational algebra) over the sample to solve the training problem.

This is joint work with Alessio Mansutti, to appear in PODS 2027, see

[How (and when) can you fit examples to logic-based hypothesis…](https://arxiv.org/abs/2606.01107 "https://arxiv.org/abs/2606.01107")

### **Associate Professor Mahmoud Abo Khamis**:

- **Functional Aggregate Queries (FAQ) in 10 minutes:** a unifying perspective on database queries, matrix and tensor computation, and machine learning.
- **From RelationalAI to Oxford faculty in 10 minutes:** Mahmoud’s experience in industry, how theoretical ideas enter real systems, and how that journey shaped his academic career.

This lecture will show why the foundations taught in our course—including relational algebra, Datalog, aggregation and matrix computation—remain highly relevant to cutting-edge AI research and industrial systems.
