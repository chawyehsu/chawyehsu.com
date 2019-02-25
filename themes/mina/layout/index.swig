{% extends "_layout.swig" %}

{% block content %}
  <div class="post-list columns is-gapless">
  {% if theme.index_pagination %}
    {% set posts = page.posts.sort('date', 'desc') %}
  {% else %}
    {% set posts = site.posts.sort('date', 'desc') %}
  {% endif %}
  {% for post in posts %}
    {#- All posts but hidden -#}
    {% if post.hidden !== true %}
    <article class="post-card-wrap column is-4-desktop is-6-tablet is-6-mobile">
      <div class="post-card post-list-item">
        <a href="{{ url_for(post.path) }}">
          <div class="post-card__image FlexEmbed FlexEmbed-ratio--4by3" style="background-image:url({{ post.cover }})"></div>
        </a>
        <div class="post-card__info">
          <div class="post-meta">
            <time datetime="{{ post.date.format() }}">{{ post.date.format('D MMMM YYYY') }}</time>
          </div>
          <div class="post-title">
            <a href="{{ url_for(post.path) }}">{{ post.title or post.link }}</a>
          </div>
        </div>
      </div>
    </article>
    {% endif %}
  {% endfor %}
  </div>
  {{ partial('components/pagination') }}
{% endblock %}
