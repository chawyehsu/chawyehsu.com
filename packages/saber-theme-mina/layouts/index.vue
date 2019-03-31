<template>
  <div class="stie-container">
    <Header />
    <main id="site-main" class="mina-wrapper">
      <div class="post-list columns is-gapless">
        <article
          v-for="post in page.posts"
          :key="post.attributes.permalink"
          class="post-card-wrap column is-4-desktop is-6-tablet is-6-mobile">
          <div class="post-card post-list-item">
            <saber-link :to="post.attributes.permalink">
              <div class="post-card__image FlexEmbed FlexEmbed-ratio--4by3" :style="`background-image:url('${post.attributes.cover}')`"></div>
            </saber-link>
            <div class="post-card__info">
              <div class="post-meta">
                <time :datetime="post.attributes.createdAt">{{ date(post.attributes.createdAt, '{DD} {MMMM} {YYYY}') }}</time>
              </div>
              <div class="post-title">
                <saber-link :to="post.attributes.permalink">
                  {{ post.attributes.title || post.attributes.permalink }}
                </saber-link>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Pagination :page="page" v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Pagination from '../components/Pagination.vue'
import { date } from '../utils'

export default {
  props: ['page'],
  components: {
    Header,
    Footer,
    Pagination
  },
  methods: {
    date
  },
  head() {
    return {
      title: `${this.page.attributes.title} - ${this.$siteConfig.title}`
    }
  }
}
</script>
