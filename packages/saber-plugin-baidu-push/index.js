const path = require('path')

const ID = 'baidu-push'
exports.name = ID

exports.apply = api => {
  api.browserApi.add(path.join(__dirname, 'saber-browser.js'))
}
