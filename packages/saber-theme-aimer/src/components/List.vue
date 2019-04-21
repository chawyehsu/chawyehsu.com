<template>
  <main class="site-wrapper">
    <div class="post-list columns">
      <article
        v-for="post in page.posts"
        :key="post.attributes.permalink"
        class="post-card-wrap column is-3-desktop is-4-tablet is-6-mobile">
        <div class="post-card post-list-item">
          <div class="post-card-image">
            <saber-link class="link" :to="post.attributes.permalink">
              <img :data-src="post.attributes.cover">
              <span class="overlay"></span>
            </saber-link>
          </div>
          <div class="post-card-info">
            <div class="post-meta">
              <time :datetime="post.attributes.createdAt">
                {{ date(post.attributes.createdAt, '{DD} {MMMM} {YYYY}') }}
              </time>
            </div>
            <div class="post-title">
              <saber-link :to="post.attributes.permalink" :title="post.attributes.title">
                {{ post.attributes.title || post.attributes.permalink }}
              </saber-link>
            </div>
          </div>
        </div>
      </article>
    </div>
    <Pagination :page="page" v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)" />
  </main>
</template>

<script>
import lozad from 'lozad'
import Pagination from './Pagination.vue'
import { date } from '../utils'

export default {
  props: ['page'],
  components: {
    Pagination
  },
  mounted () {
    lozad(document.querySelectorAll('.post-card-image img')).observe()
  },
  methods: {
    date
  }
}
</script>
