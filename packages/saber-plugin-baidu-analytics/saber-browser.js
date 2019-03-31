/* eslint-disable */
// Baidu analytics integration for Vue.js renderer
export default function (ctx) {
  var router = ctx.router
  if (process.browser && process.env.NODE_ENV === 'production' && __BA_TRACK_ID__) {

    (function() {
      window._hmt = window._hmt || []
      var hm = document.createElement('script')
      hm.async = 1
      hm.src = 'https://hm.baidu.com/hm.js?' + __BA_TRACK_ID__
      var s = document.getElementsByTagName('script')[0]
      s.parentNode.insertBefore(hm, s)
    })()

    router.afterEach(function (to) {
      window._hmt.push(['_trackPageview', to.fullPath])
    })
  }
}
