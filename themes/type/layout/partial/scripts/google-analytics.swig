{%- if config.google_analytics_id || theme.google_analytics_id -%}
<script>
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', '{{ config.google_analytics_id || theme.google_analytics_id }}', 'auto');
  ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
{%- endif -%}
