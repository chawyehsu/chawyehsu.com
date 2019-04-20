<script>
import Index from './index.vue'
export default {
  extends: Index,
  head () {
    this.page.attributes.title = this.page.attributes.title || this.page.category

    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`
    }
  }
}
</script>
