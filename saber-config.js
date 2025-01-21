module.exports = {
  build: {
    lazy: true,
    extractCSS: true,
  },
  theme: './theme',
  siteConfig: {
    lang: 'zh-cn',
    url: 'https://chawyehsu.com',
    title: 'Chawye Hsu',
    description: 'Personal Website of Chawye Hsu',
    keywords: 'blog,blogger,个人博客,中文独立博客',
    author: 'Chawye Hsu',
    disqusjs: {
      shortname: 'h404bi',
      siteName: 'Chawye Hsu',
      api: 'https://chawyehsu.com/api/disqus/',
      apikey: 'Hg3FyAX4IodvgGm8OAIpuplfZW5APk2DYcuVk9DEEDSBijKPdPdooKBX7683fo6u',
      admin: 'chawyehsu',
      adminLabel: 'Mod',
    },
  },
  themeConfig: {
    since: '2015',
    pswp: true,
    header: {
      logo_url: '/',
      nav: [
        {
          name: '文章 - Blog',
          path: '/blog',
        },
        {
          name: '留言板 - Guestbook',
          path: '/guestbook',
        },
        // {
        //   name: '项目 - Projects',
        //   path: '/projects'
        // },
        {
          name: '链接 - Links',
          path: '/links',
        },
        {
          name: '关于 - About',
          path: '/about',
        },
        {
          name: '订阅 - Subscribe',
          path: '/feed',
        },
      ],
    },
    footer: {
      links: [
        {
          name: 'Twitter',
          path: 'https://twitter.com/chawyehsu',
        },
        {
          name: 'Instagram',
          path: 'https://www.instagram.com/chawyehsu',
        },
        {
          name: 'Privacy Policy',
          path: '/legal/privacy',
        },
      ],
    },
  },
  markdown: {
    plugins: [
      {
        resolve: 'markdown-it-footnote',
      },
      {
        resolve: 'markdown-it-cjk-breaks',
      },
      {
        resolve: 'markdown-it-attrs',
      },
      {
        resolve: 'markdown-it-figure-gallery',
        options: {
          dataType: true,
          figcaption: true,
          galleryClass: 'md-gallery',
          galleryImageClass: 'md-gallery-image',
          photoswipeIntegration: true,
          schemaAttributes: true,
          wrapImagesInLinks: false,
        },
      },
    ],
  },
  permalinks: {
    post: '/blog/:slug',
    page: '/:slug',
  },
  plugins: [
    // private plugins
    {
      resolve: 'saber-plugin-baidu-analytics',
      options: {
        trackId: '25da54bb9d300c118148dcad780da73b',
      },
    },
    {
      resolve: './packages/saber-plugin-ga4',
      options: {
        gtagUrl: 'https://chawyehsu.com/api/event',
        trackId: 'G-3MTYZQ2JGB',
      },
    },
    {
      resolve: 'saber-plugin-google-adsense',
      options: {
        adClientId: 'ca-pub-4381515676738667',
      },
    },
    {
      resolve: './packages/saber-plugin-image',
      options: {
        adapter: 'sharp',
        format: 'webp',
        /* sizes => image width */
        sizes: [1920, 1200, 720],
        placeholder: true,
        blendIn: false,
      },
    },
    {
      resolve: 'saber-plugin-image-photoswipe',
      options: {
        options: {
          shareEl: false,
        },
        auto: true,
      },
    },
    // public plugins
    {
      resolve: 'saber-plugin-sitemap',
      options: {
        template: './sitemap.xml',
      },
    },
    {
      resolve: '@alterjs/saber-plugin-feed',
      options: {
        atomFeed: '/feed/atom.xml',
      },
    },
    {
      resolve: '@alterjs/saber-plugin-query-posts',
      options: {
        permalinks: {
          category: '/blog/category/:name',
          tag: '/blog/tag/:name',
        },
      },
    },
  ],
}
