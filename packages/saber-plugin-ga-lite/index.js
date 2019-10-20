const path = require('path')

const ID = 'ga-lite'

exports.name = ID

exports.apply = (api, options = {}) => {
  options = Object.assign(
    {
      trackId: null,
      // Adsense script URL
      galiteUrl: 'https://cdn.jsdelivr.net/npm/ga-lite'
    },
    options
  )

  // Invalid trackId, don't include the plugin
  if (!options.trackId || typeof options.trackId !== 'string') return

  api.hooks.chainWebpack.tap(ID, config => {
    config.plugin('constants').tap(([constants]) => [
      Object.assign(constants, {
        __SABER_GALITE_OPTIONS__: JSON.stringify(options)
      })
    ])
  })

  api.browserApi.add(path.join(__dirname, 'saber-browser.js'))
}
