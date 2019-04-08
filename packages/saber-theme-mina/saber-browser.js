/*!
 * Saber Theme Mina
 *
 * Copyright (c) 2018-present Chawye Hsu, licensed under the MIT license.
 *
 */
import Vue from 'vue'
import 'normalize.css'
import 'suitcss-components-flex-embed/lib/flex-embed.css'
import './styles/main.styl'

// Ignore ionicons web components in Vue
Vue.config.ignoredElements = [/^ion-/]

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
      script: [
        {
          src: 'https://unpkg.com/ionicons@4.5.5/dist/ionicons.js',
          body: true
        }
      ]
    }
  }
}
