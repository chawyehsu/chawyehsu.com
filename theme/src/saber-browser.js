import './styles/main.scss'

export default ({ Vue, setHead }) => {
  // Manipulating <head>
  setHead(vm => ({
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
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
        href: 'https://use.typekit.net/',
        rel: 'preconnect',
        crossorigin: true
      },
      {
        href: 'https://cdn.jsdelivr.net/',
        rel: 'preconnect',
        crossorigin: true
      }
    ]
  }))
}
