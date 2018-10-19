<header id="site-header" class="site-header header__fixed">
  <div class="wrap columns is-gapless is-mobile">
    <div class="column is-3-desktop">
      <a class="site-title" href="{{ theme.header.logo_url }}">
        {{ config.domain or config.title }}
      </a>
    </div>
    {%- if theme.header.nav -%}
    <div class="topbar-nav-wrap column is-9-desktop">
      <nav class="topbar-nav">
        <ul>
        {%- for name, path in theme.header.nav -%}
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
    </div>
    {%- endif -%}
  </div>
</header>
