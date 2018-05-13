<head>
  <!-- You know, rather than reading the source like a chump, you can see it all on GitHub like a champ: https://github.com/h404bi/h404bi.com -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="renderer" content="webkit">
  <meta name="generator" content="Hexo {{ hexo_version() }}">
  {% if page.keywords %}
  <meta name="keywords" content="{{ page.keywords }}">
  {% endif %}
  {% if page.description %}
  <meta name="description" content="{{ page.description }}">
  {% endif %}
  <title>{% if page.title %}{{ page.title }} · {% endif %}{{ config.title }}</title>
  <link rel="dns-prefetch" href="//fonts.gstatic.com">
  <link rel="icon" type="image/x-icon" href="{{ url_for('favicon.ico') }}">
  {{ css('static/type.css?version=' + theme_version()) }}
  {{ partial('scripts/auto-nightmode') }}
</head>
