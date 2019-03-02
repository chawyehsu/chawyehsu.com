<!DOCTYPE html>
<html
  lang="{{ page.language || config.language }}"
  class="{% if page.serif || theme.force_serif %} serif{% endif %}">
{{ partial('_partial/head') }}
<body>
<div id="app" class="stie-container">
  {{ partial('_partial/header') }}
  <main id="site-main" class="mina-wrapper">
    {% block content %}{% endblock %}
  </main>
  {{ partial('_partial/footer') }}
</div>
{{ partial('_partial/scripts') }}
</body>
</html>
