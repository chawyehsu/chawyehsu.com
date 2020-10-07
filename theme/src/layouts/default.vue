<template>
  <div class="tach-root">
    <Header />
    <main :class="[page.pageCoverMode ? `tach-main page-cover-mode-${page.pageCoverMode}` : 'tach-main']">
      <!-- pageCoverMode fullhd -->
      <section
        v-if="page.assets.cover && page.pageCoverMode === 'fullhd'"
        class="page-cover-fullhd">
        <saber-image class="image" :src="page.assets.cover" />
        <span class="overlay"></span>
      </section>
      <!-- page content -->
      <article class="page-content" role="main" itemscope itemtype="https://schema.org/Article">
        <div class="page-inner-wrapper tach-page-wrapper">
          <header :class="[page.assets.cover && page.pageCoverMode !== false ? `page-header page-has-cover` : 'page-header']">
            <!-- pageCoverMode mixed -->
            <section
              v-if="page.assets.cover && page.pageCoverMode !== false && page.pageCoverMode !== 'fullhd'"
              class="page-cover">
              <saber-image class="image" :src="page.assets.cover" />
              <span class="overlay"></span>
            </section>
            <section class="page-head-content">
              <h1 class="page-title is-family-sans">{{ page.title }}</h1>
              <div class="page-meta" v-if="page.type === 'post'">
                <section class="page-datetime">
                  <time
                    class="published"
                    :datetime="new Date(page.createdAt).toISOString()">
                    {{ date(page.createdAt, '{YYYY}-{Mo}-{DD}') }}
                  </time>
                </section>
                <section class="page-categories" v-if="page.categoriesInfo">
                  <span v-for="(item, index) in page.categoriesInfo" :key="index">
                    <span v-if="index > 0">, </span>
                    <saber-link
                      class="category"
                      :to="item.permalink">
                      {{ item.name }}
                    </saber-link>
                  </span>
                </section>
              </div>
            </section>
          </header>
          <section
            v-if="page.type === 'post' && isPostOutdated()"
            class="page-alert outdated-alert notification">
            本文最后更新于 {{ days() }} 天前（{{ humanDate() }}），其中的信息可能已经有所发展或者不再适合现阶段。
          </section>
          <section class="page-body">
            <Photoswipe v-if="$themeConfig.pswp" auto ref="photoswipe">
              <slot name="default" />
            </Photoswipe>
            <slot v-else name="default" />
          </section>
          <section class="page-block-action" v-if="$themeConfig.share || page.tagsInfo">
            <div class="page-share"></div>
            <div class="page-tags" v-if="page.tagsInfo">
              <span v-for="(item, index) in page.tagsInfo" :key="index">
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
            v-if="page.comments !== false && $siteConfig.disqusjs"
            :page="page" />
          <footer class="page-footer"></footer>
        </div>
      </article>
    </main>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Disqus from '../components/Disqus.vue'
import { date, head } from '../utils'

export default {
  props: ['page'],
  components: {
    Header,
    Footer,
    Disqus
  },
  methods: {
    date,
    days () {
      const nowDate = new Date()
      const postDate = new Date(this.page.updatedAt || this.page.createdAt)
      return Math.floor((nowDate - postDate) / 86400000)
    },
    humanDate () {
      return date(this.page.updatedAt || this.page.createdAt, '{YYYY}-{Mo}-{DD}')
    },
    isPostOutdated () {
      return this.days() > 365
    }
  },
  head () {
    return head(this)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/components/variables';
.page-cover {
  position: relative;
  padding-top: 66.6666%; // is-3by2
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.page-head-content {
    margin-top: $gap-m;
  }

.page-has-cover {
  .page-head-content {
    margin-top: $gap-l;
  }
}

// pageCoverMode fullhd
.page-cover-mode-fullhd {
  .page-cover-fullhd {
    position: relative;

    img {
      display: block;
      width: 100%;
      height: 60vw;
      max-height: 80vh;
      object-fit: cover;
    }
  }

  .page-head-content {
    margin: 0;
  }
}

// pageCoverMode mixed
.page-cover-mode-mixed {
  .page-cover {
    padding-top: 100%; // is-1by1
    transition: all 0.3s ease-in-out;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .overlay {
      background-color: rgba(0, 0, 0, 0.35);
    }
  }

  .page-head-content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: $column-gap;
    margin: 0;
    z-index: 2;

    .page-title, .page-meta {
      color: #efefef;
    }
  }
}

// >= 481px
@media screen and (min-width: $tablet) {
  .page-cover {
    padding-top: 66.6666%; // is-3by2
  }
  .page-cover-mode-mixed {
    .page-cover {
      padding-top: 66.6666%; // is-3by2
    }
  }
}
// >= 769px
@media screen and (min-width: $desktop) {
  .page-cover {
    padding-top: 50%; // is-2by1
  }

  .page-cover-mode-mixed {
    .page-cover {
      padding-top: 50%; // is-2by1
    }
  }
}
</style>
