{{ js('static/mina.js?version=' + theme_version()) }}

{% if (config.disqus_shortname || theme.disqus_shortname) && page.comments %}
<script>
  var disqus = {
    load: function disqus () {
      var disqus_shortname = '{{ config.disqus_shortname || theme.disqus_shortname }}';
      var disqus_url = '{{ url }}';
      var disqus_title = {{ JSON.stringify(page.title) }};

      (function() {
        var dsq = document.createElement('script');
        dsq.type = 'text/javascript';
        dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();
      // Remove load button after loading.
      document.getElementById('load-disqus').outerHTML='';
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
