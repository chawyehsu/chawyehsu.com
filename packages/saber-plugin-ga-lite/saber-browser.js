export default function (ctx) {
  const options = __SABER_GALITE_OPTIONS__ // eslint-disable-line no-undef

  if (process.browser && process.env.NODE_ENV === 'production' && options['trackId']) {
    (function (e, t, n, i, s, a, c) {
      e[n] = e[n] || function () {
        (e[n].q = e[n].q || []).push(arguments)
      }

      a = t.createElement(i)
      a.async = true
      a.src = s
      a.onload = () => {
        galite('create', options['trackId'], 'auto')
        galite('send', 'pageview')
      }
      c = t.getElementsByTagName(i)[0]
      c.parentNode.insertBefore(a,c)
    })(window, document, 'galite', 'script', options['galiteUrl'])

    // Workaround #147, should remove after vue-router v4 release
    ctx.router.afterEach(to => setTimeout(() => {
      galite('set', 'page', to.fullPath)
      galite('send', 'pageview')
    }, 300))
  }
}
