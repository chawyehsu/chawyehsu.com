export default function ({ Vue }) {
  const options = __SABER_GOOGLE_ADSENSE_OPTIONS__ // eslint-disable-line no-undef

  // Import Google Adsense script
  if (process.browser && options['adClientId']) {
    (function () {
      var ads = document.createElement('script')
      ads.async = true
      ads.src = options['adsenseScriptUrl']
      ads.onload = () => {
        (window.adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: options['adClientId'],
          enable_page_level_ads: options['pageLevelAds']
        })
      }
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(ads, s)
    })()
  }

  // Register ad component
  Vue.component('adsbygoogle', {
    props: {
      adClient: {
        type: String,
        default: options['adClientId']
      },
      adSlot: {
        type: String
      },
      adFormat: {
        type: String,
        default: 'auto'
      },
      adLayout: {
        type: String
      },
      adLayoutKey: {
        type: String
      },
      adStyle: {
        type: Object,
        default () {
          return {
            display: 'block'
          }
        }
      }
    },
    data () {
      return {
        show: true
      }
    },
    mounted () {
      this.showAd()
    },
    watch: {
      '$route' (to, from) {
        if (to.fullPath === from.fullPath) {
          return
        }

        let changed = false

        if (to.path !== from.path) {
          changed = true
        }

        if (changed) {
          // If the route has changed, update the ad
          this.updateAd()
        }
      }
    },
    methods: {
      adRegion () {
        return 'page-' + Math.random()
      },
      updateAd () {
        // Reset the INS element
        this.show = false
        // Show new ad on nextTick
        this.$nextTick(this.showAd)
      },
      showAd () {
        this.show = true
        this.$nextTick(() => {
          try {
            // Once ad container (<ins>) DOM has (re-)rendered, requesst a new advert
            (window.adsbygoogle = window.adsbygoogle || []).push({})
          } catch (error) {
            console.error(error)
          }
        })
      }
    },
    render (h) {
      return h(
        'ins',
        {
          'class': ['adsbygoogle'],
          style: this.adStyle,
          attrs: {
            'data-ad-client': this.adClient,
            'data-ad-slot': this.adSlot || null,
            'data-ad-format': this.adFormat,
            'data-ad-region': this.show ? this.adRegion() : null,
            'data-ad-layout': this.adLayout || null,
            'data-ad-layout-key': this.adLayoutKey || null,
            'data-full-width-responsive': options['fullWidthResponsive'] ? 'true' : 'false',
            'data-adtest': options['test'] ? 'on' : null
          },
          domProps: {
            innerHTML: this.show ? '' : ' '
          },
          key: Math.random()
        }
      )
    }
  })
}
