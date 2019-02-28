{{ js('static/mina.js?version=' + theme_version()) }}

{% if (config.disqus_shortname || theme.disqus_shortname) && page.comments %}
<script>
  var disqus = {
    load: function () {
      // Remove load button after loading.
      document.getElementById('load-disqus').outerHTML = '';
      // get DisqusJS instance
      new DisqusJS({
        shortname: '{{ config.disqus_shortname || theme.disqus_shortname }}',
        siteName: "Chawye Hsu's Blog",
        identifier: '{{ page.path }}',
        url: '{{ page.permalink }}',
        apikey: 'Hg3FyAX4IodvgGm8OAIpuplfZW5APk2DYcuVk9DEEDSBijKPdPdooKBX7683fo6u',
        admin: 'h404bi',
        adminLabel: 'Mod'
      });
    }
  }
</script>
{% endif %}

{% if config.baidu_analytics_id || theme.baidu_analytics_id %}
<script>
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement('script');
  hm.src = 'https://hm.baidu.com/hm.js?{{ config.baidu_analytics_id || theme.baidu_analytics_id }}';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(hm, s);
})();
</script>
{% endif %}

{% if theme.baidu_push %}
<script>
(function () {
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  if (curProtocol === 'https') {
    bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
  }
  else {
    bp.src = 'http://push.zhanzhang.baidu.com/push.js';
  }
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(bp, s);
})();
</script>
{% endif %}

{% if config.google_analytics_id || theme.google_analytics_id %}
<script>
  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
  ga('create', '{{ config.google_analytics_id || theme.google_analytics_id }}', 'auto');
  ga('send', 'pageview');
</script>
<script async src='https://www.google-analytics.com/analytics.js'></script>
{% endif %}
