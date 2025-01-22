const path = require('node:path')
const url = require('node:url')
const ejs = require('./lib/ejs')

const ID = 'generate-sitemap'

exports.name = ID

exports.apply = (api, options = {}) => {
  // Plugin options
  options = Object.assign({
    path: 'sitemap.xml',
    template: path.join(__dirname, 'sitemap.xml'),
  }, options)

  const { siteConfig } = api.config
  if (!siteConfig.url) {
    throw new Error('siteConfig.url is required for saber-plugin-sitemap')
  }

  const sitemapLink = url.resolve(siteConfig.url, options.path)

  api.hooks.afterGenerate.tapPromise(ID, async () => {
    const items = []

    for (const page of api.pages.values()) {
      // Filter draft post and sitemap skipping pages
      if (!page.draft && page.sitemap !== false) {
        items.push({
          type: page.type,
          url: url.resolve(siteConfig.url, page.permalink),
          lastmod: page.updatedAt,
          date: page.createdAt,
          updated: page.updatedAt,
          // Also expose original page attributes
          attributes: page,
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
        posts,
      })
      await fs.outputFile(
        path.resolve(api.resolveOutDir(), options.path),
        xml,
        'utf8',
      )
    }
  })

  api.hooks.defineVariables.tap(ID, (variables) => {
    return Object.assign(variables, {
      sitemap: true,
      sitemapLink,
    })
  })
}
