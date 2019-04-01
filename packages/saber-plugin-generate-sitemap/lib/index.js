const url = require('url')
const path = require('path')
const ejs = require('ejs')

const ID = 'generate-sitemap'

exports.name = ID

exports.apply = (api, options = {}) => {
  // Plugin options
  options = Object.assign({
    path: 'sitemap.xml',
    template: path.join(__dirname, 'sitemap.xml')
  }, options)

  const { siteConfig } = api.config
  if (!siteConfig.url) {
    throw new Error('siteConfig.url is required for saber-plugin-generate-sitemap')
  }

  const sitemapURL = url.resolve(siteConfig.url, options.path)

  api.hooks.afterGenerate.tapPromise(ID, async () => {
    const items = []

    for (const page of api.pages.values()) {
      // Filter draft post and sitemap skipping pages
      if (!page.attributes.draft && page.attributes.sitemap !== false) {
        items.push({
          type: page.attributes.type,
          url: url.resolve(siteConfig.url, page.attributes.permalink),
          lastmod: new Date(page.attributes.updatedAt),
          date: new Date(page.attributes.createdAt),
          updated: new Date(page.attributes.updatedAt)
        })
      }
    }

    // Sort by createdAt date
    const posts = items.sort((a, b) => {
      return b.date - a.date
    })

    if (posts.length > 0) {
      const { log } = api
      const { fs } = api.utils
      log.info(`Generating sitemap.xml`)
      const xml = ejs.compile(fs.readFileSync(options.template, 'utf8'))({
        posts: posts
      })
      await fs.outputFile(
        api.resolveCwd(path.join('.saber/public/', options.path)),
        xml,
        'utf8'
      )
    }
  })

  api.hooks.defineVariables.tap(ID, variables => {
    return Object.assign(variables, {
      sitemap: true,
      sitemapURL: sitemapURL
    })
  })
}
