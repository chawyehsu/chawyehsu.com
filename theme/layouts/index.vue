<template>
  <div class="tach-root">
    <Header />
    <main class="tach-main">
      <!-- page content -->
      <div class="page-content" role="main">
        <div class="page-inner-wrapper tach-page-wrapper">
          <header class="page-header">
            <section class="page-head-content">
              <h1 class="page-title">{{ page.title }}</h1>
            </section>
          </header>
          <section class="page-body">
            <ul>
              <li
                v-for="post in page.posts"
                :key="post.attributes.permalink">
                <time class="post-date" :datetime="post.attributes.createdAt">
                  {{ date(post.attributes.createdAt, '{YYYY}-{Mo}-{DD}') }}
                </time>
                <saber-link
                  class="post-title"
                  :to="post.attributes.permalink"
                  :title="post.attributes.title">
                  {{ post.attributes.title || post.attributes.permalink }}
                </saber-link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Pagination from '../components/Pagination.vue'
import { date, head } from '../utils'

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
  head () {
    return head(this)
  }
}
</script>

<style lang="scss" scoped>
ul {
  list-style-type: none!important;
  padding-left: 0!important;

  li {
    margin-bottom: var(--gap-s);
  }
}

.post-date {
  color: var(--color-text-secondary);
}

.post-title {
  margin-left: var(--gap-s);
}
</style>
