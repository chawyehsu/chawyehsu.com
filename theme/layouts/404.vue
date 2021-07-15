<template>
  <div class="tach-root">
    <Header />
    <main class="tach-main">
      <section class="tach-layout-header">
        <div class="container horizon-gap">
          <h1>404</h1>
          <p>Page Not Found</p>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  head () {
    return {
      title: `Page Not Found - ${this.$siteConfig.title}`
    }
  }
}
</script>

<style lang="scss" scoped>
.tach-layout-header {
  padding-top: 3rem;

  h6 {
    font-size: 80%;
    font-weight: 400;
  }
}
</style>
