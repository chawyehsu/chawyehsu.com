{%- if config.disqus_shortname && page.comments -%}
<section class="post-comments">
  <div id="load-disqus">
    <a href="javascript:void(0)" onclick="disqus.load()" title="Load Disqus">Leave a comment</a>
  </div>
  <div id="disqus_thread"></div>
</section>
{%- endif -%}
