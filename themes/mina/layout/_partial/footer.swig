<footer id="site-footer" class="site-footer">
  <div class="wrap">
    {% if theme.footer.nav %}
    <div class="footer__section">
      <nav class="footer-nav">
        <ul>
          {% for name, path in theme.footer.nav %}
          <li><a href="{{ url_for(path) }}">{{ name }}</a></li>
          {% endfor %}
        </ul>
      </nav>
    </div>
    {% endif %}
    {% if theme.footer.social_network %}
    <div class="footer__section">
      <div class="social-network">
        <ul>
          {% for name, path in theme.footer.social_network %}
          <li><a class="icon ion-{{ name }}" href="{{ url_for(path) }}" target="_blank"></a></li>
          {% endfor %}
        </ul>
      </div>
    </div>
    {% endif %}
    <div class="footer__section">
      <div class="copy-right">
        {% set current = date(Date.now(), "YYYY") %}
        &copy;
        {% if theme.since and theme.since != current %}
          {{ theme.since }} -
        {% endif %}
        {{ current }}
        {{ config.author }}
        {# busuanzi #}
        {% if theme.busuanzi %}
          <script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
          <span id="busuanzi_container_site_pv">
            , <span id="busuanzi_value_site_pv"></span> hits
          </span>
        {% endif %}
      </div>
    </div>
  </div>
</footer>
