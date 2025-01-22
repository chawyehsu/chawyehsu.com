export default function (ctx) {
  if (
    typeof window !== 'undefined'
    // eslint-disable-next-line node/prefer-global/process
    && process.env.NODE_ENV === 'production'
    // eslint-disable-next-line no-undef
    && __BA_TRACK_ID__
  ) {
    const doNotTrackEnabled = Number.parseInt(
      navigator.msDoNotTrack // Internet Explorer 9 and 10 vendor prefix
      || window.doNotTrack // IE 11 uses window.doNotTrack
      || navigator.doNotTrack, // W3C
      10,
    ) === 1

    if (doNotTrackEnabled) {
      // Respect browsers' doNotTrack setting
      return
    }

    (function () {
      window._hmt = window._hmt || []
      let hm = document.createElement('script')
      hm.async = 1
      // eslint-disable-next-line no-undef
      hm.src = `https://hm.baidu.com/hm.js?${__BA_TRACK_ID__}`
      let s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()

    ctx.router.afterEach((to) => {
      window._hmt.push(['_trackPageview', to.fullPath])
    })
  }
}
