<template>
  <div class="stie-container">
    <Header />
    <List :page="page" />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import List from '../components/List.vue'

export default {
  props: ['page'],
  components: {
    Header,
    Footer,
    List
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
        }
      ]
    }
  }
}
</script>
