import lozad from 'lozad'
import styles from './styles.module.css'

export default ({ Vue }) => {
  const options = __SABER_IMAGE_OPTIONS__ // eslint-disable-line no-undef
  const blank =
    'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs='

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
    render (h) {
      let { $attrs } = this
      const lazy = Object.assign(
        options,
        JSON.parse($attrs['data-lazy'] || '{}'),
        this.lazy
      )

      const getOption = key =>
        lazy[key] || (lazy[key] !== false && options[key])

      // Photoswipe title support
      if ($attrs.alt) {
        $attrs['data-pswp-title'] = $attrs.alt
      }

      if (getOption('lazyLoad')) {
        if (typeof this.src === 'string') {
          let { src } = this

          return h('img', {
            attrs: {
              ...$attrs,
              src,
              srcset: blank,
              'data-srcset': src
            }
          })
        }

        let { width, src, srcSet, placeholder } = this.src || {}

        const loading = getOption('placeholder') ? placeholder : blank
        const blendIn = getOption('blendIn')

        return h('img', {
          attrs: {
            ...$attrs,
            src,
            srcset: loading,
            'data-srcset': srcSet,
            width
          },
          class: { [styles.blendIn]: blendIn }
        })
      }

      if (typeof this.src === 'string') {

        return h('img', {
          attrs: { ...$attrs, src: this.src }
        })
      }

      let { src, srcSet: srcset } = this.src || {}

      return h('img', {
        attrs: { ...$attrs, src, srcset }
      })
    }
  })
}
