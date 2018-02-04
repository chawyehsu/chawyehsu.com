/* global hexo */
'use strict'

hexo.extend.helper.register('hexo_version', function () {
  return this.env.version
})
