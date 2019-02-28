/*!
 * Hexo Theme Mina
 *
 * Copyright (c) 2018-present Chawye Hsu, licensed under the MIT license.
 *
 */
import 'ionicons/dist/css/ionicons.min.css'
import 'disqusjs/dist/disqusjs.css'
import './css/main.styl'

import lozad from 'lozad'
import Headroom from 'headroom.js'
import DisqusJS from 'disqusjs'
/**
 * IntersectionObserver polyfill for lozad.js:
 *   https://github.com/ApoorvSaxena/lozad.js#browser-support
 */
import 'intersection-observer'

const mina = (function () {

  const header = () => {
    const el = document.querySelector('.site-header')
    const options = {
      tolerance: 5,
      offset: 155,
      classes: {
        initial: 'animated',
        pinned: 'slideDown',
        unpinned: 'slideUp'
      }
    }
    new Headroom(el, options).init()
  }

  const lazyloader = () => {
    lozad(document.querySelectorAll('.lazyload img')).observe()
  }

  const disqusjs = () => {
    window.DisqusJS = DisqusJS
  }

  return {
    init: () => {
      header()
      lazyloader()
      disqusjs()
    }
  }
}())

mina.init()
