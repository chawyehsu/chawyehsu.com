{% if page.total > 1 %}
  <nav class="pagination columns is-mobile is-gapless">
    <div class="prev-wrap column is-6">
      {% if page.prev %}
      <a class="prev" href="{{ url_for(page.prev_link) }}">
        <i class="icon ion-ios-arrow-back"></i>
        <span class="text">PREVIOUS</span>
      </a>
      {% endif %}
    </div>
    <div class="next-wrap column is-6">
      {% if page.next %}
      <a class="next" href="{{ url_for(page.next_link) }}">
        <span class="text">NEXT</span>
        <i class="icon ion-ios-arrow-forward"></i>
      </a>
      {% endif %}
    </div>
  </nav>
{% endif %}
