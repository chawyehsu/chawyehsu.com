<template>
  <section class="post-comments">
    <div id="load-disqus">
      <a @click="disqus.load()" title="Load Disqus">Leave a comment</a>
    </div>
    <div id="disqus_thread"></div>
  </section>
</template>

<script>
import DisqusJS from 'disqusjs'
import 'disqusjs/dist/disqusjs.css'

export default {
  props: ['page'],
  mounted() {
    const { page, $siteConfig } = this
    this.disqus = {
      load: function () {
        // Remove load button after loading.
        document.getElementById('load-disqus').outerHTML = ''
        // Get DisqusJS instance
        new DisqusJS({
          shortname: `${$siteConfig.disqusjs.shortname}`,
          siteName: `${$siteConfig.disqusjs.sitename}`,
          identifier: page.attributes.permalink,
          url: `${$siteConfig.url}${page.attributes.permalink}`,
          apikey: `${$siteConfig.disqusjs.apikey}`,
          admin: `${$siteConfig.disqusjs.admin}`
        })
      }
    }
  }
}
</script>
