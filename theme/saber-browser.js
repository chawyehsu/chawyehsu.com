import './styles/main.css'

export default ({ __Vue, setHead }) => {
  // Manipulating <head>
  setHead(vm => ({
    htmlAttrs: {
      lang: vm.$siteConfig.lang,
    },
    meta: [
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'default',
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes',
      },
      {
        name: 'author',
        content: vm.$siteConfig.author,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:creator',
        content: vm.$siteConfig.author,
      },
    ],
    link: [
      {
        rel: 'alternate',
        title: `${vm.$siteConfig.title} - Feed`,
        href: `${vm.$siteConfig.url}${vm.$feed.permalink}`,
        type: vm.$feed.type === 'atom'
          ? 'application/atom+xml'
          : vm.$feed.type === 'rss2' ? 'application/rss+xml' : 'application/json',
      },
      {
        href: 'https://cdn.jsdelivr.net',
        rel: 'preconnect',
        crossorigin: true,
      },
      {
        href: 'https://fonts.googleapis.com',
        rel: 'preconnect',
      },
      {
        href: 'https://fonts.gstatic.com',
        rel: 'preconnect',
        crossorigin: true,
      },
      // {
      //   href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
      //   rel: 'preload',
      //   as: 'style',
      // },
      {
        href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap',
        rel: 'stylesheet',
      },
    ],
    script: [
      {
        innerHTML: '(()=>{const d="dark";const s=localStorage.getItem("user-color-scheme");const p=window.matchMedia("(prefers-color-scheme: dark)").matches;if(!s?p:s===d){const c=document.documentElement.classList;!c.contains(d)&&c.add(d)}})();',
      },
    ],
    __dangerouslyDisableSanitizers: ['script'],
  }))
}
