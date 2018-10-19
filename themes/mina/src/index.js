/*!
 * Hexo Theme Mina
 *
 * Copyright (c) 2018-present Chawye Hsu, licensed under the MIT license.
 *
 */
import 'ionicons/dist/css/ionicons.min.css'
import './css/main.styl'

import lazyload from 'lazyload'
import Headroom from 'headroom.js'

const mina = (function mina () {

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
    new lazyload(document.querySelectorAll('.lazyload img'))
  }

  return {
    init: () => {
      header()
      lazyloader()
    }
  }
}())

mina.init()
