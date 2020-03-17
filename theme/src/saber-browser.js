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
          href: 'https://fonts.googleapis.com/',
          rel: 'preconnect',
          crossorigin: true
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
          href: 'https://fonts.googleapis.com/css?family=Inconsolata:400,700|Alegreya:400,400i,700,700i|Noto+Sans+SC:400,700|Noto+Serif+SC:400,700|Open+Sans:400,400i,700,700i&display=swap&subset=chinese-simplified',
          rel: 'stylesheet'
        }
      ]
    }
  })
}
