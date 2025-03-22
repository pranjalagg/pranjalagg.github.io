---
layout: page
title: photography
permalink: /photography/
description: in search of meaning
nav: false
nav_order: 5
display_categories: # [work, fun]
horizontal: false
---

<!-- pages/photography.md -->
<div class="row-mt-3" id="photos">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="https://drive.google.com/thumbnail?id=1fvqCw7mk-_aqZTHeechA2a4UIYrI4aJo=s220?authuser=0" class="img-fluid rounded z-depth-1" zoomable=true %}
        <!-- <img src="https://drive.google.com/thumbnail?id=1fvqCw7mk-_aqZTHeechA2a4UIYrI4aJo" class="img-fluid rounded z-depth-1"> -->
    </div>
</div>

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
