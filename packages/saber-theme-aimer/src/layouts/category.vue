<script>
import Index from './index.vue'
export default {
  extends: Index,
  head () {
    this.page.title = this.page.title || this.page.category

    return {
      title: `${this.page.title} - ${this.$siteConfig.title}`
    }
  }
}
</script>
