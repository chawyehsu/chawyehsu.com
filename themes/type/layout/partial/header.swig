<header id="site-header" class="site-header wrap">
  <a class="site-title" href="{{ url_for(theme.root || config.root) }}">
    {{ config.domain or config.title }}
  </a>
  {%- if theme.menu -%}
  <nav class="site-nav">
    <ul>
    {%- for name, path in theme.menu -%}
      <li>
      {%- if url_for(page.path)|replace('/index.html', '') === url_for(path) -%}
        <a class="active" href="{{ url_for(path) }}">{{ name }}</a>
      {%- else -%}
        <a href="{{ url_for(path) }}">{{ name }}</a>
      {%- endif -%}
      </li>
    {%- endfor -%}
    </ul>
  </nav>
  {%- endif -%}
</header>
