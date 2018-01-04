  <div id="content" class="content wrap">
    <article itemscope itemtype="http://schema.org/Article">
      <header class="page-header">
        <h1 class="page-title">{{ page.title }}</h1>
      </header>
      <section class="page-content">
        {{ page.content }}
      </section>
      {{ partial('partial/comment') }}
      <footer class="page-footer"></footer>
    </article>
  </div>
