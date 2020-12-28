const { join } = require('path')

const ID = 'images'

exports.name = ID

const detectAdapter = (adapter) => {
  if (adapter === 'sharp') {
    try {
      require('sharp') // A test
      // return the acutal adapter
      return require('responsive-loader/sharp')
    } catch (e) {
      throw new Error('To use sharp adapter with saber-plugin-image, \
sharp dependency installation is required.')
    }
  } else if (adapter === 'jimp') {
    try {
      require('jimp') // A test
      // return the acutal adapter
      return require('responsive-loader/jimp')
    } catch (e) {
      throw new Error('To use jimp adapter with saber-plugin-image, \
jimp dependency installation is required.')
    }
  } else {
    throw new Error(`${adapter} adapter is not supported, \
either jimp or sharp is supported by saber-plugin-image.`)
  }
}

exports.apply = (api, options = {}) => {
  options = Object.assign(
    {
      adapter: 'jimp',
      lazyLoad: true,
      placeholder: true,
      blendIn: true,
      markdownImages: true
    },
    options
  )

  // update adapter string to the actual imported adapter
  options.adapter = detectAdapter(options.adapter)

  api.browserApi.add(join(__dirname, 'saber-browser.js'))

  api.renderer.hooks.getVueLoaderOptions.tap(ID, options => {
    options.transformAssetUrls = Object.assign({}, options.transformAssetUrls, {
      'saber-image': ['src']
    })
    return options
  })

  // Convert images in Markdown pages to saber-image
  if (options.markdownImages) {
    api.hooks.chainMarkdown.tap(ID, config => {
      config.plugin(ID).use(md => {
        md.core.ruler.push(ID, state => {
          const { tokens } = state

          for (const token of tokens) {
            if (token.type === 'inline' && token.children) {
              const { children } = token

              // Clone children to avoid an infinite loop
              for (const child of [...children]) {
                if (child.type === 'image' || child.tag === 'img') {
                  child.tag = 'saber-image'
                  child.nesting = 1

                  // Detect Markdown image querystring
                  let qs = child.attrGet('src').split('?')[1]
                  if (qs) {
                    qs = require('querystring').parse(qs)
                    Object.keys(qs).forEach(key => {
                      if (qs[key] === 'true' || qs[key] === 'false') {
                        qs[key] = JSON.parse(qs[key])
                      }
                    })
                    child.attrSet('data-lazy', JSON.stringify(qs))
                  }

                  // Append closing tag for saber-image
                  children.splice(
                    children.indexOf(child) + 1,
                    0,
                    new state.Token('image_close', 'saber-image', -1)
                  )
                }
              }
            }
          }
        })
      })
    })
  }

  api.hooks.chainWebpack.tap(ID, config => {

    config.plugin('constants').tap(([constants]) => [
      Object.assign(constants, {
        __SABER_IMAGE_OPTIONS__: JSON.stringify(options)
      })
    ])

    config.module.rule('image').exclude.add(/\.(jpe?g|png)$/i)

    config.module
      .rule(ID)
      .test(/\.(jpe?g|png)$/i)
      .use('responsive-loader')
      .loader(require.resolve('responsive-loader'))
      .options({
        name: "images/[name]-[hash:8].[ext]",
        ...options
      })
  })
}
