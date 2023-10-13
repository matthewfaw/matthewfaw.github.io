---
layout: post
title: Co-authors
excerpt_separator: <!--more-->
---

{% assign sorted_names = site.data.collaborators | sort: 'last' %}
My coauthors include: {% for author in sorted_names %}{% if forloop.last == false %}<a href="{{ author.homepage }}">{{ author.first }} {{ author.last }}</a>, {% else %}and <a href="{{ author.homepage }}">{{ author.first }} {{ author.last }}</a>.{% endif %}{% endfor %}
