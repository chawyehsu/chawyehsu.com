const path = require('path')

const ID = 'ga-lite'

exports.name = ID

exports.apply = (api, { trackId = false } = {}) => {
  api.hooks.chainWebpack.tap(ID, config => {
    config.plugin('constants').tap(([options]) => [
      Object.assign(options, {
        __GALITE_TRACK_ID__: JSON.stringify(trackId)
      })
    ])
  })

  api.browserApi.add(path.join(__dirname, 'saber-browser.js'))
}
