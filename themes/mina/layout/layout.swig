<!DOCTYPE html>
<html lang="{{ page.language || config.language }}" class="{% if page.serif || theme.force_serif %} serif{% endif %}">
{{ partial('components/head') }}
<body>
<div id="app" class="stie-container">
  {{ partial('components/header') }}
  <main id="site-main" class="mina-wrapper">
    {{ body }}
  </main>
  {{ partial('components/footer') }}
</div>
{{ partial('components/scripts') }}
</body>
</html>
