const path = require('path')

const ID = 'google-adsense'

exports.name = ID

exports.apply = (api, { adClientId = false } = {}) => {
  api.hooks.chainWebpack.tap(ID, config => {
    config.plugin('constants').tap(([options]) => [
      Object.assign(options, {
        __AD_CLIENT_ID__: JSON.stringify(adClientId)
      })
    ])
  })

  api.browserApi.add(path.join(__dirname, 'saber-browser.js'))
}
