---
title: "Living Systems Norms for Group Communication "
date: 2021-11-18 15:01:22 -0700
categories: communication norms
color: yellow
author:
  - name: Maria Talero
    email: maria@peoplemedicine.org
  - name: Drew Hornbein
    email: drew@peoplemedicine.org
    url: https://dddrew.org
related:
  skills:
    - i-statements
    - active-listening
    - owning-your-interpretations
    - sharing-impact-skillfully
    - validating-before-criticizing
    - helping-others-be-seen
    - inviting-exiles-coming-out-of-hiding
---
A wetland acts as a natural water filter, trapping sediments and converting pollutants into less harmful chemicals. We see these communication norms as BABY STEPS that start to transform interpersonal tensions into trust energy. Ultimately, the goal is to grow a natural filtering system for group communication that keeps glorious amounts of trust energy circulating! (By themselves, these norms won't get us all the way there but they're a really good start in that direction).

*Dedicated to [Naveed Heydari](https://www.instagram.com/pockets_of_belonging/) and [Theo Grondahl](https://www.wholisticrelating.org/)*

- - -

<div class="columns is-multiline is-centered">
  {% for skill in page.related.skills %}
    {%- assign item = site.skills | where: 'slug', skill | first -%}
    <div class="column is-one-third-tablet">
      <a href="#{{ item.slug }}" class="box is-fullheight is-flex is-flex-direction-column is-align-content-space-between">
        <p class="title is-5">{{ item.title }}</p>
        {%- if item.painpoint -%}
        <p class="has-text-danger"><strong class="is-family-monospace is-size-7">Pain Point</strong><br>{{ item.painpoint }}</p>
        {%- endif -%}
      </a>
    </div>
  {% endfor %}
</div>

- - -

<div>
{% for skill in page.related.skills %}
  {%- assign item = site.skills | where: 'slug', skill | first -%}
  <div class="block" id="{{ item.slug }}">
    <h3 class="title is-4">{{ item.title }}</h3>
    {%- if item.painpoint -%}
    <p class="px-4 has-text-danger"><strong class="is-family-monospace is-size-7">Pain Point</strong><br>{{ item.painpoint }}</p>
    {%- endif -%}
    {{ item.content | markdownify }}
  </div>
{% endfor %}
</div>