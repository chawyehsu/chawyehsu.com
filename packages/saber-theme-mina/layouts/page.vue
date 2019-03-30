<template>
  <div class="stie-container">
    <Header />
    <main id="site-main" class="mina-wrapper">
      <div id="post" class="post-content">
        <article itemscope itemtype="http://schema.org/Article">
          <header class="post-header">
            <h1 class="page-title">{{ page.attributes.title }}</h1>
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
import lozad from 'lozad'
import 'intersection-observer' // IntersectionObserver polyfill for lozad.js
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Disqus from '../components/Disqus.vue'

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
  head() {
    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`
    }
  }
}
</script>

<style>

</style>
