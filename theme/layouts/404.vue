<template>
  <div class="main-container">
    <Header />
    <main>
      <section>
        <div>
          <h1 class="page-title">404</h1>
          <p>Page Not Found</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  components: {
    Header,
  },
  head () {
    return {
      title: `Page Not Found - ${this.$siteConfig.title}`
    }
  }
}
</script>
