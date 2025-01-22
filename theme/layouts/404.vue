<script>
import SiteHeader from '../components/Header.vue'

export default {
  components: {
    SiteHeader,
  },
  head() {
    return {
      title: `Page Not Found - ${this.$siteConfig.title}`,
    }
  },
}
</script>

<template>
  <div class="main-container">
    <SiteHeader />
    <main>
      <section>
        <div>
          <h1 class="page-title">
            404
          </h1>
          <p>Page Not Found</p>
        </div>
      </section>
    </main>
  </div>
</template>
