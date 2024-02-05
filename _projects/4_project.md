---
layout: page
title: text detection in distorted social media images
description: 
img: assets/img/project_imgs/4_project_textdet_0.png
importance: 3
category: fun
related_publications: true
---

Text detection in distorted social media images presents a multifaceted challenge due to various factors like low resolution, non-uniform backgrounds, and complex layouts. Leveraging advanced machine learning algorithms and computer vision techniques, researchers are striving to develop robust solutions to accurately identify and extract text from such images. These methods often involve preprocessing steps to enhance image quality, followed by sophisticated text detection models trained on diverse datasets to handle the variability inherent in social media imagery. By addressing these challenges, advancements in text detection technology promise to facilitate tasks like content moderation, sentiment analysis, and information retrieval in the dynamic landscape of social media platforms.

In this project {% cite palaiahnakote4348525tldsmi %}, we aimed at recognising text in natural scenic images that repeatedly gets distorted by sharing on social media platforms. For our experiment, we created a dataset of images by distorting them through multiple sharing on social media platforms like WhatsApp, Instagram and Telegram. We used MSER (Maximally Stable Extremal Region) to extract connected components from the images. This algorithm extracts a number of co-variant regions from an image, where all pixels below a specified threshold are considered `black` while those above or equal to it are considered `white`. If a series of thresholded result images is formed from a source image, with each image corresponding to an increasing threshold `t`, the initial image will be white, followed by black patches due to local intensity minima, which will grow larger. When one of these dark regions has the same (or nearly the same) size as the preceding image, a maximally stable extremal zone is formed. We then trained a genetic programming model that returns a GP tree compromising of convolution operations that was then applied to the target image components to highlight the text featuresand suppress the non-text features.

Following were the components of the genetic programming model:
1. `Population`: Genetic algorithm maintains a population of individuals – a collection of candidate solutions to the problem at hand–at any given time. In our method the population consisted of randomly generated a GP trees consisting of convolution operations as their nodes. A typical node is a convolution operation having a kernel with its size ranging from 1×1 to 5×5 and values in the range [-3, 3] followed by ReLU activation function. This step outputs a feature map as its output. The figure below shows an example of a GP tree from the initial population.

2. `Fitness Function`: Individuals are evaluated using a fitness function at each iteration of the process (also called the target function). This is the function to solve the problem or improve the results. Individuals with higher fitness scores are more likely to be picked to reproduce and represent the next generation. The quality of the solution increases with time and the fitness value rises, the process can be stopped once a suitable fitness value is found.
For the calculation of the fitness value, we applied the convolution operation obtained from the population of the GP tree on a set of MSER components obtained from 5 images. Since the output of the GP tree is a feature vector of 10,000 dimensions, we applied Principal Component Analysis (PCA) to reduce its dimensions. This is further given to the SVM classifier for its training. Once done, the testing dataset is used to calculate the recall for the trained model which is eventually used as the fitness value for the respective individual. This means that the GP tree that results in a higher recall value than others is a fitter individual than the others. The figure below shows all the steps performed to calculate the fitness value for each individual.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_imgs/4_project_textdet_1.png" title="GP Tree" class="img-fluid rounded" %}
    </div>
</div>
<div class="caption">
    On the left, a GP tree formed using convolution operations with initial random fiilters. Right, block diagram for fitness function. Each GP tree is testes on the testing dataset of MSER component images, and the recall obtained for the model is considerd as the fitness value for that individual.
</div>

3. `Selection`: Following the calculation of each individual's fitness score, a selection procedure is employed to determine which individual in the population should be selected for genetic operators and would constitute the next generation. Individual fitness scores are used in this selecting procedure. Those with better scores are more likely to be chosen for the successive generations. Individuals with low fitness values can still be chosen, but their chances are slimmer. Their genetic material is not fully excluded in this way.
For our method, we used the process of tournament selection to select the best individuals. In this we choose 'k' individuals and hold a tournament among them. The fittest candidate among the chosen (based on their fitness values) is picked and transferred on to the next generation. Similarly, several such tournaments are held, and we eventually come up with a final list of candidates for the subsequent generations.

4. `Crossover`: The crossover operation generates two new trees (offspring) from two selected trees (parents). The operation begins by selecting two nodes at random from the parent trees and then swapping the subtrees to create a new tree based on the selected nodes. Through various experimentation and trials, we had applied a crossover of 50% to our population.
The figure below shows how the crossover operation taking place between two GP trees by swapping their subtrees from their nodes.

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_imgs/4_project_textdet_2.png" title="Crossover" class="img-fluid rounded" %}
    </div>
</div>
<div class="caption">
    Depiction of crossover operation on two GP trees
</div>

5. `Mutation`: Based on a single chosen tree, the mutation operation creates a new tree . The goal of mutation is to refresh the population at random intervals and introduce random changes. For the purpose of our model, we have introduced a mutation of 35% in the population.
The operation of the final evolved GP tree obtained from the above steps on text and non-text components of both original and distorted images are depicted in the below figure. 

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/project_imgs/4_project_textdet_3.png" title="Mutation" class="img-fluid rounded" %}
    </div>
</div>
<div class="caption">
    Operation of the evolved GP tree on the text and non-text components of distorted and original image components
</div>


