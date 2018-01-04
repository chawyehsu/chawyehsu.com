  <div id="content" class="content wrap">
    <div class="page-header">
      <h1 class="post-title">{{ page.title }}</h1>
    </div>
    <div class="page-content">
      {{ page.content }}
    </div>
    <ul class="post-list">
    {#- All posts despite hidden -#}
    {%- for post in site.posts.sort('date', 'desc') -%}
      <li class="post-list-item">
        <a href="{{ url_for(post.path) }}">
          <span class="post-title">{{ post.title or post.link }}</span>
          <span class="post-meta">
            <time datetime="{{ post.date.format() }}">{{ post.date.format('dddd D MMMM YYYY') }}</time>
          </span>
        </a>
      </li>
    {%- endfor -%}
    </ul>
  </div>
