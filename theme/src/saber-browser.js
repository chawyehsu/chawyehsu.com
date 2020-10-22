import './styles/main.scss'

export default ({ Vue, setHead }) => {
  // Photoswipe
  if (process.browser) {
    const Photoswipe = require('vue-pswipe').default
    Vue.use(Photoswipe, {
      shareEl: false
    })
  }

  // Manipulating <head>
  setHead(vm => ({
    htmlAttrs: {
      lang: 'zh-CN',
      // class: 'serif'
    },
    meta: [
      {
        name: 'author',
        content: vm.$siteConfig.author
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:creator',
        content: vm.$siteConfig.author
      }
    ],
    link: [
      {
        rel: 'alternate',
        title: `${vm.$siteConfig.title} - Feed`,
        href: `${vm.$siteConfig.url}${vm.$feed.permalink}`,
        type: vm.$feed.type === 'atom' ? 'application/atom+xml' : vm.$feed.type === 'rss2' ? 'application/rss+xml' : 'application/json'
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
        href: 'https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,400;0,700;1,400;1,700&family=Fira+Mono:wght@400;700&family=Noto+Sans+SC:wght@400;700&family=Noto+Serif+SC:wght@400;700&display=swap&subset=chinese-simplified',
        rel: 'stylesheet'
      }
    ]
  }))
}
