export default ctx => {
  const options = __SABER_ADOBE_FONT_OPTIONS__ // eslint-disable-line no-undef

  if (options['kitId']) {
    // Add typekit preconnect to <head>
    ctx.setHead({
      link: [
        {
          href: 'https://use.typekit.net/',
          rel: 'preconnect',
          crossorigin: true
        }
      ]
    })

    // Load typekit script
    if (process.browser) {
      (function (d) {
        var config = {
          kitId: options['kitId'],
          scriptTimeout: 3000,
          async: true
        },
        h = d.documentElement,
        t = setTimeout(function () {
          h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive"
        }, config.scriptTimeout),
        tk = d.createElement("script"),
        f = false,
        s = d.getElementsByTagName("script")[0], a

        h.className += " wf-loading"
        tk.src = options['typekitHost'] + '/' + config.kitId + '.js'
        tk.async = true
        tk.onload = tk.onreadystatechange = function () {
          a = this.readyState
          if (f || a && a != "complete" && a != "loaded") return
          f = true
          clearTimeout(t)
          try {
            Typekit.load(config)
          } catch(e) {}
        }
        s.parentNode.insertBefore(tk, s)

        // use typekit-cache
        if (options['useTypekitCache']) {
          var tkc = d.createElement("script")
          tkc.src = options['typekitCacheUrl']
          tkc.async = true
          s = d.getElementsByTagName("script")[0]
          s.parentNode.insertBefore(tkc, s)
        }
      })(document)
    }
  }
}
