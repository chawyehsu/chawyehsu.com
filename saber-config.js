module.exports = {
  // Using develop version of theme
  theme: "./packages/saber-theme-aimer/src",
  siteConfig: {
    url: 'https://www.h404bi.com',
    title: 'The Art of Chawye Hsu',
    description: 'Personal Website of Chawye Hsu.',
    keywords: 'h404bi,blog,blogger,个人博客',
    author: 'h404bi',
    disqusjs: {
      shortname: 'h404bi',
      sitename: "The Art of Chawye Hsu",
      apikey: 'Hg3FyAX4IodvgGm8OAIpuplfZW5APk2DYcuVk9DEEDSBijKPdPdooKBX7683fo6u',
      admin: 'h404bi'
    }
  },
  themeConfig: {
    title: "Chawye Hsu's Blog",
    since: '2015',
    home: {
      avatar: '/static/img/avatar.png',
      avatarLink: '/about',
      slogan: {
        name: 'There will still be love in this world',
        path: 'https://www.bilibili.com/video/av1021686/',
        title: 'Thank you GARNET CROW since 2009'
      },
      menu: [
        {
          name: 'Blog',
          path: '/blog',
          title: 'Bloggin'
        },
        {
          name: 'GitHub',
          path: 'https://github.com/h404bi',
          title: 'Coding...'
        },
        {
          name: 'Steam',
          path: 'https://steamcommunity.com/id/h404bi',
          title: 'Gaming...'
        },
        {
          name: 'Music',
          path: 'https://music.163.com/#/user/home?id=35631431',
          title: 'Besides GC, EDM'
        }
      ],
      location: 'Guangzhou, China'
    },
    header: {
      logo_url: '/blog',
      nav: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        }
      ]
    },
    footer: {
      nav: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Guestbook',
          path: '/guestbook'
        },
        {
          name: 'Links',
          path: '/links'
        },
        {
          name: 'RSS',
          path: '/feed/atom.xml'
        }
      ],
      social_network: [
        {
          icon: 'logo-twitter',
          path: 'https://twitter.com/h404bi'
        },
        {
          icon: 'logo-instagram',
          path: 'https://www.instagram.com/chawyehsu/'
        },
        {
          icon: 'logo-github',
          path: 'https://github.com/h404bi'
        },
        {
          icon: 'logo-game-controller-b',
          path: 'https://steamcommunity.com/id/h404bi/'
        },
        {
          icon: 'ios-musical-notes',
          path: 'https://music.163.com/#/user/home?id=35631431'
        }
      ]
    }
  },
  markdown: {
    plugins: [
      // {
      //   resolve: 'markdown-it-anchor',
      //   options: {
      //     permalink: true,
      //     permalinkClass: 'header-anchor icon ion-md-link',
      //     permalinkSymbol: '',
      //     permalinkBefore: true
      //   }
      // },
      {
        resolve: 'markdown-it-emoji'
      },
      {
        resolve: 'markdown-it-footnote'
      },
      {
        resolve: 'markdown-it-cjk-breaks'
      },
      {
        resolve: 'markdown-it-lazy-image',
        options: {
          placeholder: '/static/img/loading.gif'
        }
      },
      {
        resolve: 'markdown-it-attrs'
      },
      {
        resolve: 'markdown-it-implicit-figures',
        options: {
          dataType: true,
          figcaption: true
        }
      }
    ]
  },
  permalinks: {
    post: '/blog/:year/:month/:slug',
    page: '/:slug'
  },
  plugins: [
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
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: '/feed/atom.xml',
        jsonFeed: '/feed/index.json'
      }
    },
    {
      resolve: 'saber-plugin-query-posts',
      options: {
        perPage: 12,
        permalinks: {
          category: '/blog/category/:name',
          tag: '/blog/tag/:name'
        }
      }
    },
    {
      resolve: 'saber-plugin-sitemap',
      options: {
        template: './sitemap.xml'
      }
    }
  ]
}
