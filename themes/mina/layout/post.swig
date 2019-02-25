{% extends "_layout.swig" %}

{% block content %}
  <div id="post" class="post-content">
    <article itemscope itemtype="http://schema.org/Article">
      <header class="post-header">
        <h1 class="page-title">{{ page.title }}</h1>
      </header>
      <section class="post-body">
        {{ page.content }}
      </section>
      {{ partial('components/comment') }}
      <footer class="post-footer"></footer>
    </article>
  </div>
{% endblock %}
