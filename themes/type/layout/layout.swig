<!DOCTYPE html>
<html lang="{{ page.language || config.language }}" class="{% if page.nightmode || theme.night_mode.force %} night-mode{% endif %}{% if page.serif || theme.force_serif %} serif{% endif %}">
{{ partial('partial/head') }}
<body>
<div id="site-wrapper" class="site-wrapper">
  {{ partial('partial/header') }}
  <main id="main" role="main">
    {{ body }}
  </main>
  {{ partial('partial/footer') }}
</div>
{{ partial('partial/scripts') }}
</body>
</html>
