{# Never used #}
{%- if page.total > 1 -%}
  <nav class="pagination" role="pagination">
    {%- if page.prev -%}
    <a class="prev" href="{{ url_for(page.prev_link) }}">
      <span class="text">Prev</span>
    </a>
    {%- endif -%}
    {%- if page.next -%}
    <a class="next" href="{{ url_for(page.next_link) }}">
      <span class="text">Next</span>
    </a>
    {%- endif -%}
  </nav>
{%- endif -%}
