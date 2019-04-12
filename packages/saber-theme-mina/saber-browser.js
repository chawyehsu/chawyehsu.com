/*!
 * Saber Theme Mina
 *
 * Copyright (c) 2018-present Chawye Hsu, licensed under the MIT license.
 *
 */
import 'normalize.css'
import './styles/main.styl'

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
          href: 'https://unpkg.com/ionicons@4.5.5/dist/css/ionicons.min.css',
          rel: 'stylesheet'
        }
      ]
    }
  }
}
