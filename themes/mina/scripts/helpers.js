/* global hexo */
'use strict'
var pkg = require('../package.json')

hexo.extend.helper.register('hexo_version', function () {
  return this.env.version
})

hexo.extend.helper.register('theme_version', function () {
  return pkg.version
})
