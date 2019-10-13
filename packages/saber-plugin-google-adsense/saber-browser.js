export default function () {
  if (process.browser && process.env.NODE_ENV === 'production' && __AD_CLIENT_ID__) {
    (function () {
      var ads = document.createElement('script')
      ads.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
      ads.async = true
      ads.setAttribute('data-ad-client', __AD_CLIENT_ID__)
      var s = document.getElementsByTagName("script")[0]
      s.parentNode.insertBefore(ads, s)
    })()
  }
}
