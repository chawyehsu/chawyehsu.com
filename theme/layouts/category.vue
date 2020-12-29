<script>
import Index from './index.vue'
export default {
  extends: Index,
  head () {
    this.page.title = this.page.category || this.page.title

    return {
      title: `${this.page.title} - ${this.$siteConfig.title}`
    }
  }
}
</script>
