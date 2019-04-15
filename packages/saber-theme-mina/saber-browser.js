import 'normalize.css'
import './styles/main.scss'

export default ({ rootOptions }) => {
  if (process.browser) {
    // IntersectionObserver polyfill for lozad.js
    require('intersection-observer')
  }

  rootOptions.head = () => {
    return {
      htmlAttrs: {
        lang: 'zh-CN',
        class: 'serif black-footer'
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
  }
}
