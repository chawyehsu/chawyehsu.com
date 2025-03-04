export default (vm) => {
  const lang = vm.page.lang || vm.$siteConfig.lang
  const title = (vm.page.title && vm.page.title !== vm.$siteConfig.title)
    ? `${vm.page.title} - ${vm.$siteConfig.title}`
    : vm.$siteConfig.title
  const description = vm.page.description || vm.$siteConfig.description
  let keywords = vm.$siteConfig.keywords
  if (vm.page.tags) {
    keywords += `,${vm.page.tags.map(tag => tag.name).join(',')}`
  }

  const meta = [
    {
      name: 'description',
      content: description,
      hid: 'description',
    },
    {
      name: 'keywords',
      content: keywords,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
  ]

  if (vm.page.assets.cover || vm.page.assets.og) {
    let image = vm.page.assets.cover || vm.page.assets.og

    // `og:image` requires a URL with `http(s)` prefix,
    // prepend siteURL if given image URL has no `http(s)` prefix
    if (!image.src.match(/^http/g)) {
      image = `${vm.$siteConfig.url}${image}`
    }

    meta.push({
      property: 'og:image',
      content: image,
    }, {
      property: 'twitter:image:src',
      content: image,
    })
  }

  const canonical = `${vm.$siteConfig.url}${vm.page.permalink}`.replace(/\/+$/, '')

  return {
    title,
    meta,
    htmlAttrs: {
      lang,
    },
    link: [
      {
        rel: 'canonical',
        href: canonical,
      },
    ],
  }
}
