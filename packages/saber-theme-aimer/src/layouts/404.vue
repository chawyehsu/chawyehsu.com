<template>
  <div class="site-container">
    <Header/>
    <main class="site-wrapper">
      <div class="error">
        <img class="mascot" src="../assets/whoops.png"/>
        <span class="overlay"></span>
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

<style scoped>
.site-container {
  background-color: #f7f7f7;
}
.site-container .error {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
img.mascot {
  max-width: 100%;
}
.site-container .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
