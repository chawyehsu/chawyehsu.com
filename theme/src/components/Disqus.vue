<template>
  <section class="page-comments">
    <div id="load-disqus" ref="loadButton">
      <a class="tach-button" @click="load()">Leave a comment</a>
    </div>
    <div id="disqus_thread"></div>
  </section>
</template>

<script>
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

<style lang="scss">
@import '~disqusjs/dist/disqusjs.css';
@import '../styles/components/variables';

.page-comments {
  margin-top: $gap-xl;
  text-align: center;
}

.tach-button {
  color: var(--color-text-secondary);
  cursor: pointer;
}

#dsqjs {
  * {
    font-family: inheirt;
  }

  a {
    color: var(--color-text-primary);
    &:hover {
      color: var(--color-link);
    }
  }

  .dsqjs-nav-tab {
    color: var(--color-text-secondary);
  }

  .dsqjs-tab-active,
  .dsqjs-post-body {
    color: var(--color-text-primary);
  }

  .dsqjs-post-list .dsqjs-post-header .dsqjs-post-author {
    color: var(--color-text-primary);
  }

  .dsqjs-post-list .dsqjs-post-header .dsqjs-meta {
    color: var(--color-text-secondary);
  }
}

// serif fonts mode
html {
  &:lang(en), &.serif {
    #dsqjs * {
      font-family: $font-family-serif;
    }
  }
}
</style>
