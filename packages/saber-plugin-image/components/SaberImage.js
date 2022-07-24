export default {
  name: 'SaberImage',
  props: ['src'],
  render (h) {
    let { $attrs } = this

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
