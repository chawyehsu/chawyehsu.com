const { join } = require('node:path')
const renderAttrs = require('./shim')

const ID = 'saber-plugin-image-photoswipe'
exports.name = ID

function checkMarkdownPlugin() {
  try {
    require('markdown-it-figure-gallery')
  } catch {
    throw new Error('markdown-it-figure-gallery plugin is required.')
  }
}

exports.apply = (api, options = {}) => {
  options = Object.assign(
    {
      options: {},
      auto: true,
      bubble: false,
      lazy: true,
      rotate: false,
    },
    options,
  )

  checkMarkdownPlugin()

  // Wrap Markdown image/gallery with PhotoSwipe Component
  api.hooks.chainMarkdown.tap(ID, (config) => {
    config.plugin(ID).use((md) => {
      // FIXME: apply renderAttrs shim (markdown-it future)
      md.renderer.renderAttrs = renderAttrs

      md.core.ruler.push(ID, (state) => {
        const tokens = state.tokens

        if (state.tokens.length < 2) {
          return
        }

        // do not process first and last token
        for (let i = 1; i < state.tokens.length - 1; ++i) {
          if (
            (
              tokens[i - 1].type === 'figure_open'
              && (tokens[i + 1].type === 'figure_close')
            )
            || (
              tokens[i - 1].type === 'container_gallery_open'
              && (tokens[i + 1].type === 'container_gallery_close')
            )
          ) {
            if (tokens[i - 1].attrGet('data-pswp') === 'true') {
              const pswpOpen = new state.Token('pswp_open', 'Photoswipe', 1)
              const pswpClose = new state.Token('pswp_close', 'Photoswipe', -1)

              pswpOpen.attrSet('auto')

              // add pswpClose token
              state.tokens.splice(i + 1, 0, pswpClose)
              // add pswpOpen token
              state.tokens.splice(i - 1, 0, pswpOpen)
            }
          }
        }
      })
    })
  })

  api.hooks.chainWebpack.tap(ID, (config) => {
    config.plugin('constants').tap(([constants]) => [
      Object.assign(constants, {
        __SABER_PHOTOSWIPE_OPTIONS__: JSON.stringify(options),
      }),
    ])
  })

  api.browserApi.add(join(__dirname, 'saber-browser.js'))
}
