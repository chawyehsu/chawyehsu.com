<template>
  <div class="stie-container">
    <Header />
    <main id="site-main" class="mina-wrapper">
      <div id="post" class="post-content">
        <article itemscope itemtype="http://schema.org/Article">
          <header class="post-header">
            <h1 class="page-title">{{ page.attributes.title }}</h1>
            <div class="page-meta">{{ page.attributes.tags }}</div>
          </header>
          <section class="post-body">
            <slot name="default" />
          </section>
          <Disqus v-if="page.attributes.comments !== false && $siteConfig.disqusjs" :page="page" />
          <footer class="post-footer"></footer>
        </article>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Disqus from '../components/Disqus.vue'
import lozad from 'lozad'

export default {
  props: ['page'],
  components: {
    Header,
    Footer,
    Disqus
  },
  mounted () {
    lozad(document.querySelectorAll('.post-content img')).observe()
  },
  head () {
    const head = {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`,
      meta: []
    }

    if (this.page.attributes.keywords) {
      head.meta.push({
        name: 'keywords',
        content: `${this.page.attributes.keywords}`
      })
    }

    if (this.page.attributes.description) {
      head.meta.push({
        name: 'description',
        content: `${this.page.attributes.description}`
      })
    }

    return head
  }
}
</script>
