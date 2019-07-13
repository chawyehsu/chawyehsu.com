import 'normalize.css'
import './styles/main.scss'

export default ({ setHead }) => {
  if (process.browser) {
    // IntersectionObserver polyfill for lozad.js
    require('intersection-observer')
  }

  setHead(function () {
    return {
      htmlAttrs: {
        lang: 'zh-CN',
        class: 'black-footer'
      },
      meta: [
        {
          // Fake Hexo meta generator
          name: 'generator',
          content: 'Hexo'
        }
      ],
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
          href: 'https://cdn.jsdelivr.net/npm/ionicons@4.5.5/dist/css/ionicons.min.css',
          rel: 'stylesheet'
        }
      ]
    }
  })
}
