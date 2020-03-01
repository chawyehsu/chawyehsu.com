<template>
  <footer class="tach-footer footer">
    <div class="tach-wrapper">
      <div class="container">
        <section class="section" v-if="$themeConfig.footer.nav">
          <nav class="footer-nav">
            <ul>
              <li v-for="(item, index) in $themeConfig.footer.nav" :key="index">
                <a
                  v-if="item.name.toLocaleLowerCase() === 'rss'"
                  :href="item.path"
                  target="_blank" rel="noopener">{{ item.name }}</a>
                <saber-link v-else :to="item.path">{{ item.name }}</saber-link>
              </li>
            </ul>
          </nav>
        </section>
        <section class="section" v-if="$themeConfig.footer.social_network">
          <div class="social-network">
            <ul>
              <li v-for="(item, index) in $themeConfig.footer.social_network" :key="index">
                <a :class="`icon ion-${item.icon}`" :href="item.path" target="_blank" rel="noopener"></a>
              </li>
            </ul>
          </div>
        </section>
        <section class="section">
          <div class="copyright">
            © {{ siteDate }} {{ $siteConfig.author }}. Made with <span style="color:#b30e2e">♥</span> in Guangzhou
          </div>
        </section>
      </div>
    </div>
  </footer>
</template>

<script>
import { date } from '../utils'

export default {
  computed: {
    siteDate () {
      const since = this.$themeConfig.since
      const now = date(Date.now(), '{YYYY}')

      if (since) {
        return new Date(since) === now ? now : `${since}-${now}`
      } else {
        return now
      }
    }
  },
  methods: {
    date
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/components/variables';

.tach-footer {
  background-color: $tertiary-color;
  color: $text-color;
  padding: $gap-l 0;

  ul {
    list-style-type: none;
    margin: 0;
    li {
      display: inline-block;

      &+li {
        margin-left: $gap-m;
      }
    }
  }

  .section {
    margin-bottom: $gap-m;
    text-align: center;
    &:last-child {
      margin: 0;
    }
  }

  .copyright {
    font-size: $font-size-small;
  }

  p {
    margin: 0;
    a {
      text-decoration: underline;
    }
  }
}

// dark-mode
@mixin footer-dark-mode {
  // footer
  .tach-footer {
    background-color: $tertiary-color-invert;
    color: $text-color-invert;
  }
}

@media (prefers-color-scheme: dark) {
  @include footer-dark-mode();
}

// Force dark mode
html.dark-mode {
  @include footer-dark-mode();
}
</style>
