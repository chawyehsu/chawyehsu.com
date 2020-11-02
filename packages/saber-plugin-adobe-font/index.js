const path = require('path')

const ID = 'adobe-font'
exports.name = ID

exports.apply = (api, { kitId = false } = {}) => {
  api.hooks.chainWebpack.tap(ID, config => {
    config.plugin('constants').tap(([options]) => [
      Object.assign(options, {
        __AF_KIT_ID__: JSON.stringify(kitId)
      })
    ])
  })

  api.browserApi.add(path.join(__dirname, 'saber-browser.js'))
}
