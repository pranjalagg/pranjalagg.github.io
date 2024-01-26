---
layout: page
title: hope speech detection
description: hope is the beacon that illuminates our darkest moments
img: assets/img/project_imgs/2_project_hsd.png
importance: 2
category: work
related_publications: true
giscus_comments: false
---

Even in the toughest of times, humans manage to find hope. No better way to illustrate this than with a montage of some of the most poignant moments from the last few years, when people from across the world came together and helped each other amid the coronavirus pandemic.

Social media has a huge impact on society. Everyone is free to state their opinions and it could be both positive and negative. Constructive criticism is always good but the way things are turning in today’s world, social media has laid its roots deep into our society. It has come up with its own pros and cons. Thus, in order to minimize the cons, we have tried to come up with NLP based model for hope speech detection {% cite aggarwalhope %}. Removing those harsh comments will definitely help in uplifting society and strengthen our beliefs.

The model is comprised of three components: the pre-processing unit, the feature extraction and data balancing unit, and the classification unit, as illustrated in the figure.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_imgs/2_project_hsd_1.png" title="Model" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
In the pre-processing unit, the dataset undergoes cleanup, involving the removal of unwanted text portions, expansion of abbreviations, and lemmatization for converting words to their root forms. The resulting output is then directed to the feature extraction unit, where the TF-IDF vectorization technique is employed to discern the significance of specific words or phrases within the dataset. Consequently, sentences in the dataset are transformed into vectors with distinct values. These vectors are subsequently utilized to balance the dataset through methods such as SMOTE and ADASYN, involving the addition of synthetic samples.

The outcomes of the above processes are fed into the final unit, which includes various traditional Machine Learning models like Naïve Bayes, Logistic Regression, and SVM. These models were implemented using the scikit-learn library in Python. We conducted experiments with several traditional models and also incorporated the BERT architecture into our analysis.