export default function (ctx) {
  const options = __SABER_GA4_OPTIONS__ // eslint-disable-line no-undef
  if (
    process.browser &&
    process.env.NODE_ENV === 'production' &&
    options['trackId']
  ) {
    const doNotTrackEnabled = 1 === parseInt(
      navigator.msDoNotTrack || // Internet Explorer 9 and 10 vendor prefix
      window.doNotTrack || // IE 11 uses window.doNotTrack
        navigator.doNotTrack, // W3C
      10
    )

    if (doNotTrackEnabled) {
      // Respect browsers' doNotTrack setting
      return
    }

    (function (i, s, o, g, r, a, m) {
      i.dataLayer = i.dataLayer || []
      i['GoogleAnalyticsObject'] = r
      i[r] = i[r] || function () {
        i.dataLayer.push(arguments)
      }
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', `${options['gtagUrl']}?=id${options['trackId']}`,'gtag')

    gtag('js', new Date())
    gtag('config', options['trackId'])

    // Workaround #147, should remove after vue-router v4 release
    ctx.router.afterEach(to => setTimeout(() => {
      var pageview = {
        page_location: to.fullPath
      }
      gtag('event', 'page_view', pageview)
    }, 300))
  }
}
