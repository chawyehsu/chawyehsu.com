<script>
import SiteFooter from '../components/Footer.vue'
import SiteHeader from '../components/Header.vue'
// import Pagination from '../components/Pagination.vue'
import { date, head } from '../utils'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    // Pagination,
  },
  props: ['page'],
  head() {
    return head(this)
  },
  methods: {
    date,
  },
}
</script>

<template>
  <div class="main-container">
    <SiteHeader />
    <main>
      <div class="page-content" role="main">
        <div>
          <header class="page-header">
            <section class="page-head-content">
              <h1 class="page-title">
                {{ page.title }}
              </h1>
            </section>
          </header>
          <section class="page-body">
            <ul>
              <li
                v-for="post in page.posts"
                :key="post.attributes.permalink"
              >
                <time class="post-date" :datetime="post.attributes.createdAt">
                  {{ date(post.attributes.createdAt, '{YYYY}-{Mo}-{DD}') }}
                </time>
                <saber-link
                  class="post-title"
                  :to="post.attributes.permalink"
                  :title="post.attributes.title"
                >
                  {{ post.attributes.title || post.attributes.permalink }}
                </saber-link>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <SiteFooter />
    </main>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none!important;
  padding-left: 0!important;
}
ul li {
  margin-bottom: var(--gap-s);
}
.post-date {
  color: var(--color-text-secondary);
}
.post-title {
  margin-left: var(--gap-s);
}
/* <= 480px */
@media screen and (max-width: 480px) {
  ul li {
    margin-bottom: var(--gap-m);
  }
  .post-date {
    display: block;
    width: 100%;
  }
  .post-title {
    margin-left: 0;
  }
}
</style>
