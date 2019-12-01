<template>
  <div class="tach-root">
    <Header/>
    <main class="container">
      <div class="error">
        <span>Not Found</span>
      </div>
    </main>
    <Footer/>
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
.tach-root {
  .error {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
</style>
