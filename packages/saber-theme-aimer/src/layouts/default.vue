<template>
  <div class="site-container">
    <Header />
    <main class="site-wrapper">
      <div class="page-content">
        <article itemscope itemtype="https://schema.org/Article">
          <header class="page-header">
            <h1 class="page-title">{{ page.attributes.title }}</h1>
            <div class="page-meta" v-if="page.attributes.type === 'post'">
              <section class="page-datetime">
                <time
                  class="published"
                  :datetime="new Date(page.attributes.createdAt).toISOString()">
                  {{ date(page.attributes.createdAt, '{YYYY}-{Mo}-{DD}') }}
                </time>
              </section>
              <section class="page-categories" v-if="page.categories">
                <span v-for="(item, index) in page.categories" :key="index">
                  <span v-if="index > 0">, </span>
                  <saber-link
                    class="category"
                    :to="item.permalink">
                    {{ item.name }}
                  </saber-link>
                </span>
              </section>
            </div>
          </header>
          <section
            v-if="isPostOutdated"
            class="page-alert outdated-alert notification">
            本文最后更新于 {{ days }} 天前（{{ humanDate }}），其中的信息可能已经有所发展或者不再适合现阶段。
          </section>
          <section class="page-body">
            <slot name="default" />
          </section>
          <section class="page-block-action" v-if="$themeConfig.share || page.tags">
            <div class="page-share"></div>
            <div class="page-tags" v-if="page.tags">
              <span v-for="(item, index) in page.tags" :key="index">
                  <span v-if="index > 0">, </span>
                  <saber-link
                    class="tag"
                    :to="item.permalink"
                    v-text="item.name">
                  </saber-link>
                </span>
            </div>
          </section>
          <Disqus
            v-if="page.attributes.comments !== false && $siteConfig.disqusjs"
            :page="page" />
          <footer class="page-footer"></footer>
        </article>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Disqus from '../components/Disqus.vue'
import { date } from '../utils'

export default {
  props: ['page'],
  components: {
    Header,
    Footer,
    Disqus
  },
  methods: {
    date
  },
  computed: {
    days () {
      const nowDate = new Date()
      const postDate = new Date(this.page.attributes.updatedAt || this.page.attributes.createdAt)
      return Math.floor((nowDate - postDate) / 86400000)
    },
    humanDate () {
      return date(this.page.attributes.updatedAt || this.page.attributes.createdAt, '{YYYY}-{MM}-{DD}')
    },
    isPostOutdated () {
      return this.days > 365
    }
  },
  head () {
    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`,
      meta: [
        {
          name: 'description',
          content: this.page.attributes.description
        },
        {
          name: 'keywords',
          content: this.page.attributes.keywords
        },
        {
          property: 'og:title',
          content: this.page.attributes.title
        },
        {
          property: 'og:description',
          content: this.page.attributes.description
        },
        {
          property: 'og:image',
          content: `${this.$siteConfig.url}${this.page.attributes.cover}`
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
          content: this.$siteConfig.author
        },
        {
          name: 'twitter:title',
          content: this.page.attributes.title
        },
        {
          property: 'twitter:image:src',
          content: `${this.$siteConfig.url}${this.page.attributes.cover}`
        }
      ]
    }
  }
}
</script>
