export default function (ctx) {
  if (
    process.browser &&
    process.env.NODE_ENV === 'production' &&
    __BA_TRACK_ID__
  ) {
    const doNotTrackEnabled = parseInt(
      navigator.msDoNotTrack || // Internet Explorer 9 and 10 vendor prefix
      window.doNotTrack || // IE 11 uses window.doNotTrack
        navigator.doNotTrack, // W3C
      10
    ) === 1

    if (doNotTrackEnabled) {
      // Respect browsers' doNotTrack setting
      return
    }

    (function() {
      window._hmt = window._hmt || []
      var hm = document.createElement('script')
      hm.async = 1
      hm.src = 'https://hm.baidu.com/hm.js?' + __BA_TRACK_ID__
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()

    ctx.router.afterEach(function (to) {
      window._hmt.push(['_trackPageview', to.fullPath])
    })
  }
}
