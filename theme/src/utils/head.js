export default vm => {
  const title = vm.page.title || vm.$siteConfig.title
  const description = vm.page.description || vm.$siteConfig.description
  let keywords = vm.$siteConfig.keywords
  if (vm.page.tags) keywords += `,${vm.page.tags.map(tag => tag.name).join(',')}`

  const meta = [
    {
      name: 'description',
      content: description,
      hid: 'description'
    },
    {
      name: 'keywords',
      content: keywords
    },
    {
      property: 'og:title',
      content: title
    },
    {
      property: 'og:description',
      content: description
    },
    {
      name: 'twitter:title',
      content: title
    },
    {
      name: 'twitter:description',
      content: description
    }
  ]

  if (vm.page.assets.cover || vm.page.assets.avatar) {
    const image = `${vm.$siteConfig.url}${vm.page.assets.cover || vm.page.assets.avatar}`
    meta.push({
      property: 'og:image',
      content: image
    }, {
      property: 'twitter:image:src',
      content: image
    })
  }

  return {
    title: vm.page.title ? `${vm.page.title} - ${vm.$siteConfig.title}` : vm.$siteConfig.title,
    meta: meta
  }
}
