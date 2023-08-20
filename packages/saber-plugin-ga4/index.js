const path = require('path')

const ID = 'ga4'

exports.name = ID

exports.apply = (api, options = {}) => {
  options = Object.assign(
    {
      trackId: null,
      // gtag.js script URL
      gtagUrl: 'https://www.googletagmanager.com/gtag/js'
    },
    options
  )

  // Invalid trackId, don't include the plugin
  if (!options.trackId || typeof options.trackId !== 'string') return

  api.hooks.chainWebpack.tap(ID, config => {
    config.plugin('constants').tap(([constants]) => [
      Object.assign(constants, {
        __SABER_GA4_OPTIONS__: JSON.stringify(options)
      })
    ])
  })

  api.browserApi.add(path.join(__dirname, 'saber-browser.js'))
}
