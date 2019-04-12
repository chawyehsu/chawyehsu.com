export default function (ctx) {
  var router = ctx.router
  if (process.browser && process.env.NODE_ENV === 'production' && __GALITE_TRACK_ID__) {
    (function (e, t, n, i, s, a, c) {
      e[n] = e[n] || function () {
        (e[n].q = e[n].q || []).push(arguments)
      }
      a = t.createElement(i)
      c = t.getElementsByTagName(i)[0]
      a.async = true
      a.src = s
      c.parentNode.insertBefore(a,c)
    })(window, document, 'galite', 'script', 'https://cdn.jsdelivr.net/npm/ga-lite@2.0.1/dist/ga-lite.min.js')

    galite('create', __GALITE_TRACK_ID__, 'auto')
    galite('send', 'pageview')

    router.afterEach(function (to) {
      galite('set', 'page', to.fullPath)
      galite('send', 'pageview')
    })
  }
}
