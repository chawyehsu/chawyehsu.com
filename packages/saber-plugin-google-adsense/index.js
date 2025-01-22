const path = require('node:path')

const ID = 'google-adsense'

exports.name = ID

exports.apply = (api, options = {}) => {
  // Ad-client-id for testing
  const TEST_AD_CLIENT_ID = 'ca-google'

  options = Object.assign(
    {
      // Adsense script URL
      adsenseScriptUrl: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      adClientId: null,
      pageLevelAds: false,
      fullWidthResponsive: false,
      test: false,
    },
    options,
  )

  if (process.env.NODE_ENV !== 'production') {
    // If in DEV mode, place ads in 'test' state automatically
    options.test = true
  }

  if (options.test) {
    // If in test mode, we use the Test Client ID
    options.adClientId = TEST_AD_CLIENT_ID
  }

  if (!options.adClientId || typeof options.adClientId !== 'string') {
    // Invalid adsense client ID, so don't include
    return
  }

  api.hooks.chainWebpack.tap(ID, (config) => {
    config.plugin('constants').tap(([constants]) => [
      Object.assign(constants, {
        __SABER_GOOGLE_ADSENSE_OPTIONS__: JSON.stringify(options),
      }),
    ])
  })

  api.browserApi.add(path.join(__dirname, 'saber-browser.js'))
}
