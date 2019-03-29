module.exports = {
  theme: "./packages/saber-theme-mina",
  siteConfig: {
    title: 'Chawye Hsu, H404bi',
    description: 'Personal Website of Chawye Hsu.',
    url: 'https://www.h404bi.com',
    author: 'h404bi',
    disqusjs: {
      shortname: 'h404bi',
      sitename: "Chawye Hsu's Blog",
      apikey: 'Hg3FyAX4IodvgGm8OAIpuplfZW5APk2DYcuVk9DEEDSBijKPdPdooKBX7683fo6u',
      admin: 'h404bi'
    }
  },
  themeConfig: {
    title: "Chawye Hsu's Blog",
    header: {
      logo_url: '/blog',
      nav: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about.html'
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
          path: '/about.html'
        },
        {
          name: 'Guestbook',
          path: '/guestbook.html'
        },
        {
          name: 'Links',
          path: '/links.html'
        },
        {
          name: 'RSS',
          path: '/blog/atom.xml'
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
      {
        resolve: "markdown-it-footnote"
      },
      {
        resolve: "markdown-it-cjk-breaks"
      }
    ]
  },
  permalinks: {
    post: '/blog/:year/:month/:day/:slug.html',
    page: '/:slug.html'
  },
  plugins: [
    {
      resolve: 'saber-plugin-google-analytics',
      options: {
        trackId: 'UA-91882040-1'
      }
    },
    {
      resolve: 'saber-plugin-generate-feed'
    },
    {
      resolve: 'saber-plugin-query-posts'
    }
  ]
}
