---
layout: page
title: android malware classification
description: cybersecurity is a constant battle against the shadows of malwares; with each threat detected and neutralized, we reinforce the fortress of digital resilience
img: assets/img/project_imgs/1_project_andmal.png
importance: 1
category: work
related_publications: false
---

Android malware detection is a critical aspect of mobile security, given the widespread use of Android devices. With the increasing sophistication of malicious software targeting smartphones and tablets, robust detection mechanisms are essential to safeguard user data and privacy. Various methods are employed in Android malware detection, including signature-based detection, which involves identifying known malware based on predefined patterns. Heuristic-based detection utilizes behavioral analysis to identify potential threats by examining the behavior of applications. Additionally, machine learning algorithms are increasingly being employed to enhance detection capabilities, enabling the system to learn and adapt to emerging threats.

In this project, our objective was to devise a solution for identifying and categorizing prominent malwares that pose a threat to Android users. We employed various Machine Learning techniques to distinguish between benign and malicious malwares, classifying the latter into 14 major categories including Adware, Riskware, Trojan, among others. Throughout the project, we aimed to enhance our results, achieving a maximum accuracy of 67.7% using the Random Decision Forest Classifier after fine-tuning.

A significant challenge we encountered was managing large volumes of data. To address this, we employed different statistical sampling methods such as simple random sampling, stratified sampling, cluster sampling, and systematic sampling. Subsequently, we utilized the sampled data to train various machine learning models. Hypothesis testing was used to compare the sampled data with the original population. The dataset encompassed 14 different categories of malicious malware families, with imbalances in data distribution among categories. To counter this issue, we implemented data balancing techniques for each class, including SMOTE, ADASYN, and SMOTE+ENN.