module.exports = {
  build: {
    lazy: true
  },
  theme: "./theme",
  siteConfig: {
    lang: 'zh-cn',
    url: 'https://chawyehsu.com',
    title: 'The Art of Chawye Hsu',
    description: 'Personal Website of Chawye Hsu',
    keywords: 'blog,blogger,个人博客,中文独立博客',
    author: 'Chawye Hsu',
    disqusjs: {
      shortname: 'h404bi',
      siteName: "The Art of Chawye Hsu",
      api: 'https://chawyehsu.com/api/disqus/',
      apikey: 'Hg3FyAX4IodvgGm8OAIpuplfZW5APk2DYcuVk9DEEDSBijKPdPdooKBX7683fo6u',
      admin: 'chawyehsu',
      adminLabel: 'Mod'
    }
  },
  themeConfig: {
    since: '2015',
    pswp: true,
    header: {
      logo_url: '/',
      nav: [
        {
          name: 'Blog',
          path: '/blog'
        },
        {
          name: 'Guestbook',
          path: '/guestbook'
        }
      ]
    },
    footer: {
      social_network: [
        {
          name: 'GitHub',
          path: 'https://github.com/chawyehsu'
        },
        {
          name: 'Instagram',
          path: 'https://www.instagram.com/chawyehsu'
        },
        {
          name: 'Twitter',
          path: 'https://twitter.com/chawyehsu'
        },
        {
          name: 'Links',
          path: '/links'
        },
        {
          name: 'About',
          path: '/about'
        }
      ]
    }
  },
  markdown: {
    plugins: [
      {
        resolve: 'markdown-it-footnote'
      },
      {
        resolve: 'markdown-it-cjk-breaks'
      },
      {
        resolve: 'markdown-it-attrs'
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
          wrapImagesInLinks: false
        }
      }
    ]
  },
  permalinks: {
    post: '/blog/:slug',
    page: '/:slug'
  },
  plugins: [
    // private plugins
    {
      resolve: 'saber-plugin-adobe-font',
      options: {
        kitId: 'qxo6reu',
        useTypekitCache: true
      }
    },
    {
      resolve: 'saber-plugin-baidu-analytics',
      options: {
        trackId: '25da54bb9d300c118148dcad780da73b'
      }
    },
    {
      resolve: 'saber-plugin-ga-lite',
      options: {
        trackId: 'UA-91882040-1'
      }
    },
    {
      resolve: 'saber-plugin-google-adsense',
      options: {
        adClientId: 'ca-pub-4381515676738667'
      }
    },
    {
      resolve: './packages/saber-plugin-image',
      options: {
        adapter: 'sharp',
        sizes: [1200, 720, 480],
        placeholder: true,
        blendIn: false
      }
    },
    {
      resolve: 'saber-plugin-image-photoswipe',
      options: {
        options: {
          shareEl: false
        },
        auto: true
      }
    },
    // {
    //   resolve: 'saber-plugin-jsdelivr-cdn',
    //   options: {
    //     prefix: 'https://cdn.jsdelivr.net/gh/chawyehsu/chawyehsu.com@gh-pages'
    //   }
    // },
    {
      resolve: 'saber-plugin-sitemap',
      options: {
        template: './sitemap.xml'
      }
    },
    // public plugins
    {
      resolve: 'saber-plugin-code-copy',
      options: {
        buttonStyle: {
          'display': 'flex',
          'border-radius': 0,
          'padding': '6px 6px 8px 8px',
          'transition': 'opacity .2s ease-in-out',
          'outline': 'none'
        }
      }
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: '/feed/atom.xml'
      }
    },
    {
      resolve: 'saber-plugin-prismjs'
    },
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        permalinks: {
          category: '/blog/category/:name',
          tag: '/blog/tag/:name'
        }
      }
    }
  ]
}
