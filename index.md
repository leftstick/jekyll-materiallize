---
layout: page
title: Home
tagline: The most popular papers
group: navigation
position: 1
---
{% include JB/setup %}

{% if site.posts %}
{% assign posts = site.posts %}
{% for post in posts limit:5 %}
<div class="card-panel blue lighten-5 z-depth-1">
    <h5>
        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    </h5>
    <p>
        <i class="fa fa-clock-o"></i> Publish on {{ post.date | date: "%F" }}
    </p>
    <hr>
    <p>{{ post.shortContent }}......</p>
    <a class="btn waves-effect waves-light light-blue darken-2" href="{{ BASE_PATH }}{{ post.url }}">
        <span lang="READ_MORE_BTN"></span> <i class="mdi-content-send right"></i>
    </a>

</div>
{% endfor %}
{% assign posts = nil %}
{% assign len = site.posts | size %}
{% if len > 5 %}
  {% assign archive = site.pages | where:"title","Archive" %}
  <a class="waves-effect waves-light btn right orange darken-4" href="{{ archive[0].url }}"><i class="mdi-image-style right"></i><span lang="MORE_INFO"></span></a>
  {% assign archive = nil %}
{% endif %}
{% assign len = nil %}
{% endif %}
