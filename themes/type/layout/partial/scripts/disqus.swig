{%- if (config.disqus_shortname || theme.disqus_shortname) && page.comments -%}
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
{%- endif -%}
