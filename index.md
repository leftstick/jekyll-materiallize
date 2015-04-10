---
layout: page
title: Home
tagline: The most popular papers
group: navigation
position: 1
---
{% include JB/setup %}

{% if site.posts %}
{% assign posts = site.posts | sort: 'date' %}
{% for post in posts reversed %}
<div class="card-panel cyan lighten-5 z-depth-1">
    <h5>
        <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a>
    </h5>
    <p>
        <i class="fa fa-clock-o"></i> Publish on {{ post.date | date: "%F" }}
    </p>
    <hr>
    <p>{{ post.shortContent }}......</p>
    <a class="btn waves-effect waves-light light-blue darken-2" href="{{ BASE_PATH }}{{ post.url }}">
        Read More <i class="mdi-content-send right"></i>
    </a>

</div>
{% endfor %}
{% assign posts = nil %}
{% endif %}
