<template>
  <div class="tach-root">
    <Header />
    <main class="tach-main">
      <section class="tach-layout-header">
        <div class="container horizon-gap">
          <h1>404 Not Found</h1>
          <h6>迷失了前行的路不可怕，丢了心才可怕。</h6>
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
      title: `404 File Not Found - ${this.$siteConfig.title}`
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
