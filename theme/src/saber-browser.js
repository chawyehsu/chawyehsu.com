import './styles/main.scss'

export default ({ Vue, setHead }) => {
  if (process.browser) {
    const Photoswipe = require('vue-pswipe').default
    Vue.use(Photoswipe, {
      shareEl: false
    })
  }

  setHead(function () {
    return {
      htmlAttrs: {
        lang: 'zh-CN',
        class: 'serif'
      },
      link: [
        {
          rel: 'alternate',
          title: `${this.$siteConfig.title} - Feed`,
          href: this.$feed.permalink,
          type: this.$feed.type === 'atom'
            ? 'application/atom+xml'
            : this.$feed.type === 'rss2'
              ? 'application/rss+xml'
              : 'application/json'
        },
        {
          href: 'https://fonts.gstatic.com/',
          rel: 'preconnect',
          crossorigin: true
        },
        {
          href: 'https://cdn.jsdelivr.net/',
          rel: 'preconnect',
          crossorigin: true
        },
        {
          href: 'https://cdn.jsdelivr.net/npm/ionicons@4.6.3/dist/css/ionicons.min.css',
          rel: 'stylesheet'
        }
      ]
    }
  })
}
