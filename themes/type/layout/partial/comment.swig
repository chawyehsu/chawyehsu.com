{%- if config.disqus_shortname && page.comments -%}
<section class="page-comments">
  <div id="load-disqus">
    <a href="javascript:void(0)" onclick="disqus.load()">Leave a comment</a>
  </div>
  <div id="disqus_thread"></div>
</section>
{%- endif -%}
