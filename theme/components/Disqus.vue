<template>
  <section class="page-comments">
    <div id="disqus_thread"></div>
  </section>
</template>

<script>
import DisqusJS from 'disqusjs'

export default {
  props: ['page'],
  mounted () {
    this.load();
  },
  methods: {
    load () {
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

<style>
@import '~disqusjs/dist/disqusjs.css';
.page-comments {
  margin-top: var(--gap-xl);
}
#dsqjs a {
  color: inherit;
  overflow-wrap: break-word;
  text-decoration: none;
  word-break: break-all;
}
#dsqjs a:hover,
#dsqjs a:focus {
  color: var(--color-link);
  outline: none;
}
#dsqjs .dsqjs-disqus-logo {
  background-size: 100%;
}
#dsqjs .dsqjs-post-body code {
  background: transparent;
}
#dsqjs .dsqjs-nav-tab,
#dsqjs .dsqjs-post-list .dsqjs-post-header .dsqjs-meta,
#dsqjs footer,
#dsqjs footer a {
  color: var(--color-text-secondary);
}
#dsqjs .dsqjs-tab-active,
#dsqjs .dsqjs-post-body,
#dsqjs .dsqjs-no-comment,
#dsqjs .dsqjs-post-list .dsqjs-post-header .dsqjs-post-author {
  color: var(--color-text-primary);
}
/* dsqjs-order-label */
#dsqjs .dsqjs-order-label {
  background-color: var(--color-background);
}
#dsqjs .dsqjs-order-radio:checked+.dsqjs-order-label {
  color: var(--color-background);
  background-color: var(--color-text-secondary);
}
#dsqjs .dsqjs-nav {
  border-bottom: 1px solid var(--color-accent-2);
}
#dsqjs .dsqjs-tab-active>span:after {
  background-color: var(--color-link)!important;
}
#dsqjs .dsqjs-post-list .dsqjs-post-header .dsqjs-admin-badge {
  color: var(--color-background);
  background-color: var(--color-text-secondary);
}
#dsqjs footer {
  border-top: 1px solid var(--color-accent-2);
}
</style>
