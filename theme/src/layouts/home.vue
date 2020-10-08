<template>
  <div class="tach-root">
    <Header />
    <main class="tach-main">
      <section
        v-if="page.attributes.assets.hero"
        class="tach-portfolio-hero hero">
        <div class="hero-body">
          <saber-image class="hero-img" :src="page.attributes.assets.hero" />
        </div>
      </section>
      <section class="tach-portfolio-haiku">
        <div class="tach-wrapper">
          <div class="container">
            <div class="content">
              <small>There will</small>
              <h4>still be <span>love</span> in this world</h4>
            </div>
          </div>
        </div>
      </section>
      <section class="tach-portfolio-feature">
        <div class="tach-wrapper">
          <div class="container">
            <h4>Featured</h4>
            <div class="container columns is-mobile is-multiline">
              <article
                class="tach-portfolio-item column is-4-desktop is-6-tablet is-12-mobile"
                v-for="post in page.posts.filter(item => item.featured === true).slice(0, 6)"
                :key="post.attributes.permalink">
                <figure class="item-content">
                  <saber-link class="link" :to="post.attributes.permalink">
                    <div class="pic-box">
                      <saber-image
                        class="item-cover"
                        :src="post.attributes.assets.featured"
                        :alt="post.attributes.title" />
                      <span
                        class="overlay"
                        v-text="post.attributes.title"></span>
                    </div>
                  </saber-link>
                </figure>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section class="tach-portfolio-subscribe">
        <div class="tach-wrapper">
          <div class="container">
            <div class="content">
              <h4>Feeds</h4>
              <p>Subscribe to the blog via RSS, so you won't miss newer posts</p>
              <a class="button" target="_blank" :href="this.$feed.permalink">Subscribe</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { head } from '../utils'

export default {
  props: ['page'],
  components: {
    Header,
    Footer
  },
  head () {
    return head(this)
  }
}
</script>
<style lang="scss" scoped>
@import '~bulma/sass/utilities/_all';
@import '../styles/components/variables';

.tach-portfolio-hero {
  .hero-body {
    padding: 0;

    .hero-img {
      display: block;
      width: 100%;
      height: 80vw;
      max-height: 80vh;
      object-fit: cover;
    }
  }
}

.tach-portfolio-haiku {
  padding-top: 4rem;

  .content {
    padding: 0 $gap-m;
    text-align: center;

    small {
      display: block;
      margin-bottom: $gap-m;
      color: var(--color-text-secondary);
      letter-spacing: 4px;
      text-transform: uppercase;
    }

    h4 {
      letter-spacing: 6px;
      font-weight: 400;
      line-height: $line-height-base;
      text-transform: uppercase;
    }

    span {
      background: #2f2f2f;
      color: #ffffff;
      padding: 0.3rem;
      padding-right: 0;
    }
  }
}

.tach-portfolio-feature {
  padding-top: 2.7778rem;

  .item-content {
    position: relative;
    margin: 0;

    .pic-box {
      position: relative;
      overflow: hidden;
      z-index: 1;
    }

    .item-cover {
      position: relative;
      display: block;
      width: 100%;
      height: auto;
      z-index: 0;
      transition: all 0.5s ease-in-out;
    }

    .overlay {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: $gap-l;
      color: #ffffff;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(47, 47, 47, 0.5);
      opacity: 0;
      z-index: 1;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      .overlay {
        opacity: 1;
      }

      .item-cover {
        transform: scale(1.05);
      }
    }
  }

  h4 {
    margin: 0;
    text-align: center;
    line-height: $line-height-base;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
}

.tach-portfolio-subscribe {
  padding: 3rem 0;
  text-align: center;

  .content {
    padding: 0 $gap-m;
  }

  h4 {
    text-align: center;
    letter-spacing: 2px;
    line-height: $line-height-base;
    text-transform: uppercase;
  }

  a.button {
    height: auto;
    background: #2f2f2f;
    color: #ffffff;
    margin-top: 1.7778rem;
    border-radius: 50px;
    padding: .6rem 3.2rem;
    border: 1px solid var(--color-accent-6);
    transition: all 0.2s ease-in-out;

    &:hover {
      background: #ffffff;
      color: #2f2f2f;
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 767px) {
  .tach-portfolio-feature {
    .item-content {
      .overlay {
        opacity: 1;
      }
    }
  }
}
</style>
