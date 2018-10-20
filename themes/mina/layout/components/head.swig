<head>
  {%- if theme.head_comment -%}
  <!-- {{ theme.head_comment }} -->
  {%- endif -%}
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
  <title>{% if theme.index_subdirectory && is_home() %}Blog · {% elseif page.title %}{{ page.title }} · {% endif %}{{ config.title }}</title>
  <link rel="dns-prefetch" href="https://fonts.gstatic.com">
  <link rel="icon" type="image/x-icon" href="{{ url_for('favicon.ico') }}">
  {{ css('static/mina.css?version=' + theme_version()) }}
</head>
