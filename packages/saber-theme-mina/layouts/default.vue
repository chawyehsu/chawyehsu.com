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
    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`,
      meta: [
        {
          name: 'description',
          content: this.page.attributes.description
        },
        {
          name: 'keywords',
          content: this.page.attributes.keywords
        },
        {
          property: 'og:title',
          content: this.page.attributes.title
        },
        {
          property: 'og:description',
          content: this.page.attributes.description
        },
        {
          property: 'og:image',
          content: `${this.$siteConfig.url}${this.page.attributes.cover}`
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          name: 'twitter:card',
          content: 'summary'
        },
        {
          name: 'twitter:creator',
          content: this.$siteConfig.author
        },
        {
          name: 'twitter:title',
          content: this.page.attributes.title
        },
        {
          property: 'twitter:image:src',
          content: `${this.$siteConfig.url}${this.page.attributes.cover}`
        }
      ]
    }
  }
}
</script>
