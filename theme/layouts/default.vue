<script>
import Disqus from '../components/Disqus.vue'
import SiteFooter from '../components/Footer.vue'
import SiteHeader from '../components/Header.vue'
import { date, head } from '../utils'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    Disqus,
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
      <article class="page-content" role="main" itemscope itemtype="https://schema.org/Article">
        <header class="page-header">
          <section class="page-head-content">
            <h1 class="page-title">
              {{ page.title }}
            </h1>
            <div v-if="!page.nometa" class="page-meta">
              <section v-if="page.author || $siteConfig.author" class="page-author">
                <span>{{ page.author || $siteConfig.author }}</span>
              </section>
              <section class="page-datetime">
                <time
                  class="published"
                  :datetime="new Date(page.createdAt).toISOString()"
                >
                  {{ date(page.createdAt, '{YYYY}/{Mo}/{DD}') }}
                </time>
                <!-- <time
                  v-if="page.updatedAt > page.createdAt"
                  class="updated"
                  :datetime="new Date(page.updatedAt).toISOString()">
                  {{ date(page.updatedAt, '{YYYY}/{Mo}/{DD}') }}
                </time> -->
              </section>
            </div>
          </section>
        </header>
        <section class="page-body">
          <slot name="default" />
        </section>
        <Disqus
          v-if="page.comments !== false && $siteConfig.disqusjs"
          :page="page"
        />
      </article>
      <SiteFooter />
    </main>
  </div>
</template>

<style scoped>
.page-content {
  flex: 1;
}
.page-content .page-header {
  margin-bottom: var(--gap-l);
}
.page-content .page-header .page-title {
  margin-bottom: var(--gap-l);
}
.page-content .page-header .page-meta {
  text-align: right;
  font-style: italic;
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
  line-height: var(--line-height-small);
}
</style>
