const path = require('path')

const ID = 'adobe-font'
exports.name = ID

exports.apply = (api, options = {}) => {
  options = Object.assign(
    {
      kitId: undefined,
      typekitHost: 'https://use.typekit.net',
      // Option for Typekit Cache: https://github.com/morris/typekit-cache
      useTypekitCache: false,
      typekitCacheUrl: 'https://cdn.jsdelivr.net/npm/typekit-cache'
    },
    options
  )

  api.hooks.chainWebpack.tap(ID, config => {
    config.plugin('constants').tap(([constants]) => [
      Object.assign(constants, {
        __SABER_ADOBE_FONT_OPTIONS__: JSON.stringify(options)
      })
    ])
  })

  api.browserApi.add(path.join(__dirname, 'saber-browser.js'))
}
