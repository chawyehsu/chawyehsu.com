<template>
  <section class="page-comments">
    <div id="load-disqus" ref="loadButton">
      <a class="button" @click="load()">Leave a comment</a>
    </div>
    <div id="disqus_thread"></div>
  </section>
</template>

<script>
import 'disqusjs/dist/disqusjs.css'
import DisqusJS from 'disqusjs'

export default {
  props: ['page'],
  methods: {
    load () {
      // Remove the load button when Disqus loading starts
      this.$refs.loadButton.remove()

      const { shortname, sitename, api, apikey, admin, adminLabel } = this.$siteConfig.disqusjs
      const { title, url, author } = this.$siteConfig

      // Spawn DisqusJS instance
      new DisqusJS({
        shortname: shortname || author,
        siteName: sitename || title,
        identifier: this.page.permalink,
        url: `${url}${this.page.permalink}`,
        title: this.page.title,
        api,
        apikey,
        admin: admin || author,
        adminLabel
      })
    }
  }
}
</script>

<style scoped>
.button {
  cursor: pointer;
}
</style>
