import lozad from 'lozad'
import styles from './styles.module.css'

export default ({ Vue }) => {
  const options = __SABER_IMAGE_OPTIONS__ // eslint-disable-line no-undef
  const blank =
    'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs='
  // jsdeliver CDN options
  const jsdeliverCdn = options['jsdeliverCdn']
  const jsdeliverCdnPrefix = options['jsdeliverCdnPrefix']

  Vue.component('saber-image', {
    props: ['src', 'lazy'],
    mounted () {
      const { $el } = this

      if ($el.dataset.src || $el.dataset.srcset) {
        lozad($el, {
          loaded: el => {
            el.addEventListener(
              'load',
              () => {
                el.setAttribute('data-lazy-loaded', '')
                el.addEventListener(
                  'transitionend',
                  () => {
                    el.classList.remove(styles.blendIn)
                  },
                  { once: true }
                )
              },
              { once: true }
            )
          }
        }).observe()
      }
    },
    methods: {
      updatedImageUrl (src) {
        if (process.env.NODE_ENV === 'production' && jsdeliverCdn && jsdeliverCdnPrefix) {
          return src.replace('/_saber', `${jsdeliverCdnPrefix.replace(/\/$/,'')}/_saber`)
        } else {
          return src
        }
      }
    },
    render (h) {
      const lazy = Object.assign(
        options,
        JSON.parse(this.$attrs['data-lazy'] || '{}'),
        this.lazy
      )

      const getOption = key =>
        lazy[key] || (lazy[key] !== false && options[key])

      const { $attrs } = this

      if (getOption('lazyLoad')) {
        if (typeof this.src === 'string') {
          let { src } = this
          src = this.updatedImageUrl(src)

          return h('img', {
            attrs: {
              ...$attrs,
              src,
              srcset: blank,
              'data-srcset': src,
              'data-pswp-title': $attrs.alt
            }
          })
        }

        let { width, src, srcSet, placeholder } = this.src || {}

        const loading = getOption('placeholder') ? placeholder : blank
        const blendIn = getOption('blendIn')

        src = this.updatedImageUrl(src)
        srcSet = this.updatedImageUrl(srcSet)

        return h('img', {
          attrs: {
            ...$attrs,
            src,
            srcset: loading,
            'data-srcset': srcSet,
            'data-pswp-title': $attrs.alt,
            width
          },
          class: { [styles.blendIn]: blendIn }
        })
      }

      if (typeof this.src === 'string') {
        src = this.updatedImageUrl(src)

        return h('img', {
          attrs: { ...$attrs, src: this.src, 'data-pswp-title': $attrs.alt }
        })
      }

      let { src, srcSet: srcset } = this.src || {}
      src = this.updatedImageUrl(src)
      srcSet = this.updatedImageUrl(srcSet)

      return h('img', {
        attrs: { ...$attrs, src, srcset, 'data-pswp-title': $attrs.alt }
      })
    }
  })
}
