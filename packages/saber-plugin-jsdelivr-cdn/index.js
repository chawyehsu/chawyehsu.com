const ID = 'jsdelivr-cdn'
exports.name = ID

exports.apply = (api, options = {}) => {
  api.hooks.chainWebpack.tap(ID, config => {
    if (!api.dev && options.prefix) {
      config.output.publicPath(`${options.prefix}${api.config.build.publicUrl}_saber/`)
    }
  })
}
