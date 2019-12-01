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

.tach-button {
  cursor: pointer;
}

#dsqjs {
  * {
    font-family: inheirt;
  }

  a {
    color: inherit;
    &:hover {
      color: $highlight-color;
    }
  }

  .dsqjs-nav-tab {
    color: $meta-color;
  }

  .dsqjs-tab-active,
  .dsqjs-post-body {
    color: $text-color;
  }

  .dsqjs-post-list .dsqjs-post-header .dsqjs-post-author {
    color: $text-color;
  }

  .dsqjs-post-list .dsqjs-post-header .dsqjs-meta {
    color: $meta-color;
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

// dark-mode
@mixin dsqjs-dark-mode {
  #dsqjs {
    .dsqjs-nav-tab {
      color: $meta-color-invert;
    }

    .dsqjs-tab-active,
    .dsqjs-post-body {
      color: $text-color-invert;
    }

    .dsqjs-post-list .dsqjs-post-header .dsqjs-post-author {
      color: $text-color-invert;
    }

    .dsqjs-post-list .dsqjs-post-header .dsqjs-meta {
      color: $meta-color-invert;
    }
  }
}

@media (prefers-color-scheme: dark) {
  @include dsqjs-dark-mode();
}

// Force dark mode
html.dark-mode {
  @include dsqjs-dark-mode();
}
</style>
