/*!
 * Saber Theme Mina
 *
 * Copyright (c) 2018-present Chawye Hsu, licensed under the MIT license.
 *
 */
import 'normalize.css'
import 'ionicons/dist/css/ionicons.min.css'
import 'suitcss-components-flex-embed/lib/flex-embed.css'
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
        class: 'serif'
      },
      meta: [
        {
          // Fake Hexo meta generator
          name: 'generator',
          content: 'Hexo'
        }
      ]
    }
  }
}
