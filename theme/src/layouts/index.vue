<template>
  <div class="tach-root">
    <Header />
    <main class="tach-main">
      <section class="tach-layout-header">
        <div class="container horizon-gap">
          <h1> {{ page.attributes.title }}</h1>
          <h6>{{ getHaiku() }}</h6>
        </div>
      </section>
      <section class="tach-wrapper tach-blog-items">
        <div class="container post-list columns is-mobile is-multiline">
          <article
            v-for="post in page.posts"
            :key="post.attributes.permalink"
            class="post-card-wrap column is-4-desktop is-6-tablet is-12-mobile">
            <div class="post-card post-list-item">
              <div class="post-card-image image is-3by2">
                <saber-link class="link" :to="post.attributes.permalink">
                  <saber-image
                    class="image"
                    :src="post.attributes.assets.cover"
                    :alt="post.attributes.title" />
                  <span class="overlay"></span>
                </saber-link>
              </div>
              <div class="post-card-info">
                <div class="post-meta">
                  <time :datetime="post.attributes.createdAt">
                    {{ date(post.attributes.createdAt, '{DD} {MMMM} {YYYY}') }}
                  </time>
                </div>
                <h4 class="post-title">
                  <saber-link :to="post.attributes.permalink" :title="post.attributes.title">
                    {{ post.attributes.title || post.attributes.permalink }}
                  </saber-link>
                </h4>
                <div class="post-excerpt" v-if="post.attributes.description">
                  <small> {{ post.attributes.description }}</small>
                </div>
              </div>
            </div>
          </article>
        </div>
        <Pagination :page="page" v-if="page.pagination && (page.pagination.hasNext || page.pagination.hasPrev)" />
      </section>
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
  data () {
    return {
      pageHaiku: [
        '成长，就是在不断地失去。',
        '这个世界上没有什么是永远有效的，知道吗？',
        '生命里有三样东西不可以少，空气，水，音乐。',
        '你踏上飞船，离开了这个星球，带走了一切，除了你的人性。'
      ]
    }
  },
  components: {
    Header,
    Footer,
    Pagination
  },
  methods: {
    date,
    getHaiku () {
      return this.pageHaiku[Math.floor(Math.random() * this.pageHaiku.length)]
    }
  },
  head () {
    return head(this)
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/components/variables';
.tach-layout-header {
  padding-top: 3rem;

  h6 {
    font-size: 80%;
    font-weight: 400;
  }
}

.tach-blog-items {
  padding: 3rem 0;
}

.post-list {
  .post-card {
    width: 100%;
    height: 100%;
    list-style: none;

    .post-card-image {
      position: relative;
      background-color: #fafafa;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;

      a.link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
    }

    .post-card-info {
      padding: 0.4445rem;
      word-break: break-all;
      text-align: justify;

      .post-meta {
        color: var(--color-text-secondary);
        display: block;
        font-size: var(--font-size-small);
        font-style: italic;
      }

      .post-title {
        padding: 0.4445rem 0;
        display: block;
        margin: 0;

        a {
          color: var(--color-text-primary);

          &:hover,
          &:focus {
            color: var(--color-link);
            text-decoration: none;
          }
        }
      }

      .post-excerpt {
        position: relative;
        max-height: 4rem;
        overflow: hidden;
        color: var(--color-text-secondary);
        line-height: 1.3rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;

        // fade out ellipsis
        &:after {
          content: "";
          text-align: right;
          position: absolute;
          bottom: 0;
          right: 0;
          width: 40%;
          height: 1.3em;
          background: linear-gradient(to right, var(--color-background-transparent), var(--color-background) 80%);
        }
      }
    }
  }
}

.pagination {
  .prev-wrap {
    display: flex;
    justify-content: flex-start;
  }
  .next-wrap {
    display: flex;
    justify-content: flex-end;
  }
  a {
    display: flex;
    align-items: center;
    .icon {
      padding-top: 2px;
    }
    .text {
      margin: 0 var(--gap-s);
    }
  }
}
</style>
