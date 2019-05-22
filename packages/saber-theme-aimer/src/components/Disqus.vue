<template>
  <section class="page-comments">
    <div v-show="!disqusLoaded" id="load-disqus">
      <a @click="disqus.load()" title="Load Disqus">Leave a comment</a>
    </div>
    <div id="disqus_thread"></div>
  </section>
</template>

<script>
import 'disqusjs/dist/disqusjs.css'
import DisqusJS from 'disqusjs'

export default {
  props: ['page'],
  data () {
    return {
      disqusLoaded: false
    }
  },
  mounted () {
    const { page, $siteConfig } = this
    this.disqus = {
      load: () => {
        // Remove load button after loading.
        this.disqusLoaded = true
        // Get DisqusJS instance
        new DisqusJS({
          shortname: $siteConfig.disqusjs.shortname,
          siteName: $siteConfig.disqusjs.sitename,
          identifier: page.attributes.permalink,
          url: `${$siteConfig.url}${page.attributes.permalink}`,
          title: page.attributes.title,
          apikey: $siteConfig.disqusjs.apikey,
          admin: $siteConfig.disqusjs.admin
        })
      }
    }
  }
}
</script>
