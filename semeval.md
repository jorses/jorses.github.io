---
title: SemEval 2025
layout: page
feature_image: "../assets/semeval.png"
aside: true
sidebar:
    - page: Task Description
      permalink: "#task-8-qa-over-tabular-data"
    - page: Subtask I
      permalink: "#subtask-i--databench-qa"
    - page: Subtask II
      permalink: "#subtask-ii-databench-lite-qa"
    - page: Dataset
      permalink: "#dataset"
    - page: Rules
      permalink: "#competition-rules"
    - page: Important Dates
      permalink: "#important-dates"
    - page: Help
      permalink: "#help"
---
# Task 8: QA over Tabular Data

{%  include button.html text="Join!" icon="email" link="mailto:semeval-25-t8-tabularqa@googlegroups.com" color="#e32e12" %} {% include button.html text="Paper" icon="link" link="https://huggingface.co/datasets/cardiffnlp/databench/resolve/main/Databench-LREC-Coling-2024.pdf" color="#0366d6" %} {% include button.html text="DataBench" icon="hf" link="https://huggingface.co/datasets/cardiffnlp/databench" color="#FF9D00"%} {%  include button.html text="News" icon="x" link="https://www.x.com/semeval_tableQA" color="#000000" %} 

Our task consists of Question Answering over Tabular Data making use of the newly developed [DataBench](https://huggingface.co/datasets/cardiffnlp/databench) benchmark.
DataBench is the first benchmark composed of real-world table datasets from different domains and with large size of rows and columns, as well as a wide variety of data types that allow to assess distinct sort of questions related to each data type.

We propose a task to encourage participants to develop a system that answers
the questions of the kind present in DataBench over day-to-day datasets, where the answer is either a number, a categorical value, a boolean value or lists of several types. DataBench can be used as a training and validation set, while we will release another test set explicitly compiled for the task competition.

The system developed by the participants will be provided by a series of (dataset, question) pairs and will need to provide an answer which would then be compared with a gold standard.

The answer might be achieved through a variety of methods. In our paper we illustrate two different approaches: In-Context Learning and Code Generation. You may use any of these or come up with your own approach.

## Subtask I : DataBench QA
Participants will be provided with a dataset (of any size) and a question over it. The question should be answered using the data from the dataset only.

## Subtask II: DataBench Lite QA
The task is essentially the same as the previous subtask, but involves using the sampled version of each dataset with a maximum of 20 rows per dataset (see explanation on DataBench Lite). The question should be answered using the data from the sampled dataset only. For the test set, we will similarly provide a reduced version of each dataset for this subtask. This task is especially relevant when testing for models with a smaller window size.

## Dataset

The dataset is available under the following conditions.

1. It is to be used for non-commercial purposes only.
2. All publications on research based on the dataset should give credit to the author and the publisher, in particular:
Paper: https://aclanthology.org/2024.lrec-main.1179/
Citation:
```plain
@inproceedings{oses-etal-2024-databench,
    title = "Question Answering over Tabular Data with DataBench: A Large-Scale Empirical Evaluation of LLMs",
    author = "Jorge Osés Grijalba and Luis Alfonso Ureña-López and
    Eugenio Martínez Cámara and Jose Camacho-Collados",
    booktitle = "Proceedings of LREC-COLING 2024",
    year = "2024",
    address = "Turin, Italy"
}
```
3. No part of the dataset may be shared with third parties.
4. You will be able to make use of the whole DataBench suite, while we will release 15 additional datasets with at least 20 questions per set for the testing phase.


## Competition Rules

1. You can form teams and work on the task together.
2. You are not allowed to use external data, since the questions must be answered using the data from the datasets provided.
3. Models must be open-source
4. A maximum of 5 submissions per sub-task is allowed

## Important Dates
* Evaluation start **10 January 2025** (Evaluation Blind Set Release)
* Evaluation end by **31 January 2025**

## Help

- The easiest way to reach me is at jorgeosesgrijalba@gmail.com
- You can also join the mailing list at semeval-25-t8-tabularqa@googlegroups.com
- Or follow us at https://x.com/semeval_tableQA