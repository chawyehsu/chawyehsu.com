import lozad from 'lozad'
import styles from './styles.module.css'

export default ({ Vue }) => {
  const options = Object.assign(
    __SABER_IMAGE_OPTIONS__ || {} // eslint-disable-line no-undef
  )

  if (process.browser) {
    if (options.polyfill) {
      // IntersectionObserver polyfill for lozad.js
      require('intersection-observer')
    }

    // Mount Lozad instance to Vue
    // eslint-disable-next-line no-param-reassign
    Vue.lozad = Vue.prototype.$lozad = lozad()
  }

  // Render saber-image
  Vue.component('saber-image', {
    props: ['src', 'lazy'],
    mounted () {
      // Observe elements with default selector as '.lozad'
      this.$nextTick(() =>{
        this.$lozad.observe()
      })
    },
    render (h) {
      // lazyOptions
      const lazyOptions = Object.assign(
        options,
        JSON.parse(this.$attrs['data-lazy'] || '{}'),
        this.lazy
      )
      // Helper
      const getOption = key =>
        lazyOptions[key] || (lazyOptions[key] !== false && options[key])

      const { $attrs } = this

      // LazyLoad enabled
      if (getOption('lazyLoad')) {
        // BlendIn effect
        const blendIn = getOption('blendIn')

        // Default lazyload placeholder
        let loader = 'data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs='

        if (getOption('placeholder') && typeof lazyOptions.placeholder === 'string') {
          loader = lazyOptions.placeholder
        }

        // Responsive images disabled
        if (typeof this.src === 'string') {
          return h('img', {
            attrs: {
              ...$attrs,
              src: this.src,
              srcset: loader,
              'data-srcset': this.src,
              'data-pswp-title': $attrs.alt
            },
            class: { lozad, [styles.blendIn]: blendIn }
          })
        } else {
          // Responsive images enabled
          // See: https://github.com/herrstucki/responsive-loader#usage
          const { width, src, srcSet, placeholder } = this.src

          if (getOption('placeholder') && placeholder) {
            loader = placeholder
          }

          return h('img', {
            attrs: {
              ...$attrs,
              src,
              srcset: loader,
              'data-srcset': srcSet,
              width,
              height: 'auto',
              'data-pswp-title': $attrs.alt
            },
            class: { lozad, [styles.blendIn]: blendIn }
          })
        }
      // lazyLoad disabled
      } else {
        // Responsive images disabled
        if (typeof this.src === 'string') {
          return h('img', {
            attrs: { ...$attrs, src: this.src, 'data-pswp-title': $attrs.alt }
          })
        }

        // Responsive images enabled
        const { src, srcSet: srcset } = this.src
        return h('img', {
          attrs: { ...$attrs, src, srcset, 'data-pswp-title': $attrs.alt }
        })
      }
    }
  })
}
