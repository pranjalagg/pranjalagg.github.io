---
layout: page
permalink: /publications/
title: publications
description: publications in reversed chronological order.
nav: true
nav_order: 3
---

<!-- _pages/publications.md -->

{% if site.bib_search %}
<input type="text" id="bibsearch" spellcheck="false" autocomplete="off" class="search bibsearch-form-input" placeholder="Type to filter">
{% endif %}

<div class="publications">

{% bibliography %}

</div>
