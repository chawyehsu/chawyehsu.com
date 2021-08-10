import './styles/main.css'

export default ({ Vue, setHead }) => {
  // Manipulating <head>
  setHead(vm => ({
    htmlAttrs: {
      lang: vm.$siteConfig.lang
    },
    meta: [
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'author',
        content: vm.$siteConfig.author
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        name: 'twitter:card',
        content: 'summary'
      },
      {
        name: 'twitter:creator',
        content: vm.$siteConfig.author
      }
    ],
    link: [
      {
        rel: 'alternate',
        title: `${vm.$siteConfig.title} - Feed`,
        href: `${vm.$siteConfig.url}${vm.$feed.permalink}`,
        type: vm.$feed.type === 'atom' ? 'application/atom+xml' :
          vm.$feed.type === 'rss2' ? 'application/rss+xml' : 'application/json'
      },
      {
        href: 'https://cdn.jsdelivr.net/',
        rel: 'preconnect',
        crossorigin: true
      }
    ]
  }))
}
