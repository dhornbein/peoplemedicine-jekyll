---
title: Ground Level Norms for Group Communication
date: 2021-11-18 15:01:22 -0700
categories: communication norms
color: pink
author:
  - name: Drew Hornbein
    email: drew@peoplemedicine.org
    url: https://dddrew.org
  - name: Maria Talero
    email: maria@peoplemedicine.org
related:
  skills:
    - active-listening
    - owning-your-interpretations
    - i-statements
    - sharing-impact-skillfully
---
A wetland acts as a natural water filter, by trapping sediments and converting pollutants into less harmful chemicals. We see these communication norms as key baby steps towards a healthy filtering system for group communication - one that transforms interpersonal tensions into trust energy. (By themselves, these norms won't get us all the way there but they're a really good start in that direction).

- - -

<div class="columns is-multiline is-centered">
  {% for skill in page.related.skills %}
    {%- assign item = site.skills | where: 'slug', skill | first -%}
    <div class="column is-one-third-tablet">
      <a href="#{{ item.slug }}" class="box is-fullheight">
        <p class="title is-5">{{ item.title }}</p>
        <p>{{ item.description}}</p>
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
    <p><strong>{{ item.description}}</strong></p>
    {{ item.content | markdownify }}
  </div>
{% endfor %}
</div>