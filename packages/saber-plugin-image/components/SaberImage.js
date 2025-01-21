/**
 * @param {import('vue').h} h
 * @param {*} ctx
 * @param {Array<number>} breakpoints
 * @returns {import('vue').VNode} the image element
 */
function renderer(h, ctx, breakpoints = []) {
  const { $attrs } = ctx

  if (typeof ctx.src === 'string') {
    return h('img', {
      attrs: { ...$attrs, src: ctx.src },
    })
  }

  const { width, height, src, images, srcSet: srcset } = ctx.src || {}
  const imagesLength = images.length
  const bpLength = breakpoints.length

  const sizes = []
  if (imagesLength && bpLength) {
    if (bpLength >= imagesLength) {
      for (let idx = 0; idx < bpLength; idx++) {
        const imgExceeded = idx >= imagesLength
        if (imgExceeded) {
          break
        }
        const bp = breakpoints[idx]
        sizes.push(`(max-width: ${bp}px) ${images[idx].width}px`)
      }
    } else {
      for (let idx = 0; idx < imagesLength; idx++) {
        const bpLast = idx === bpLength
        const bpExceeded = idx > bpLength
        if (bpExceeded) {
          break
        }
        sizes.push(bpLast ? `${images[idx].width}px` : `(max-width: ${breakpoints[idx]}px) ${images[idx].width}px`)
      }
    }
  }

  const attrs = { ...$attrs, src, srcset, width, height }
  if (sizes.length) {
    attrs.sizes = sizes.join(',')
  }

  return h('img', { attrs })
}

/**
 * @param {Array<number> | undefined} breakpoints
 */
export function withBreakpoints(breakpoints) {
  return {
    name: 'SaberImage',
    props: ['src'],
    render(h) {
      return renderer(h, this, breakpoints)
    },
  }
}

export default {
  name: 'SaberImage',
  props: ['src'],
  render(h) {
    renderer(h, this)
  },
}
