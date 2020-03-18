<template>
  <footer class="tach-footer footer">
    <div class="tach-wrapper">
      <div class="container columns">
        <section class="section column is-6">
          <div class="copyright">
            © {{ siteDate }} {{ $siteConfig.author }}. Made with <span style="color:#b30e2e">♥</span> in Guangzhou
          </div>
        </section>
        <section class="section column is-6" v-if="$themeConfig.footer.social_network">
          <div class="social-network">
            <ul>
              <li v-for="(item, index) in $themeConfig.footer.social_network" :key="index">
                <a class="icon" :href="item.path" target="_blank" rel="noopener">{{ item.name }}</a>
              </li>
            </ul>
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
  font-size: $font-size-small;
  color: $text-color;
  padding: 0 0 4rem 0;

  a:hover {
    text-decoration: underline;
  }

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

  .section.column {
    padding-bottom: 0;
  }

  p {
    margin: 0;
    a {
      text-decoration: underline;
    }
  }
}

@media screen and (max-width: $tablet - 1) {
  .tach-footer {
    text-align: center;
  }
}

@media screen and (min-width: $tablet) {
  .social-network {
    text-align: right;
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
