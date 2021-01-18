import lozad from 'lozad'
import styles from './SaberImage.module.css'

const blank =
    'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs='

export default {
  name: 'SaberImage',
  props: ['src', 'lazy'],
  mounted () {
    if (this.$el.dataset.src || this.$el.dataset.srcset) {
      lozad(this.$el, {
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
    const options = Object.assign(
      __SABER_IMAGE_OPTIONS__, // eslint-disable-line no-undef
      this.lazy
    )

    // lazyload
    if (options['lazyLoad']) {
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

      let { width, height, src, srcSet, placeholder } = this.src || {}
      const loading = options['placeholder'] ? placeholder : blank
      const blendIn = options['blendIn']

      return h('img', {
        attrs: {
          ...$attrs,
          src,
          srcset: loading,
          'data-srcset': srcSet,
          width,
          height
        },
        class: { [styles.blendIn]: blendIn }
      })
    }

    if (typeof this.src === 'string') {
      return h('img', {
        attrs: { ...$attrs, src: this.src }
      })
    }

    let { width, height, src, srcSet: srcset } = this.src || {}

    return h('img', {
      attrs: { ...$attrs, src, srcset, width, height }
    })
  }
}
