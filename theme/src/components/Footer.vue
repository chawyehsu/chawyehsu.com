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
  padding: 0 0 4rem 0;
  background: var(--color-background);
  color: var(--color-text-primary);
  font-size: $font-size-small;

  a {
    color: var(--color-text-primary);

    &:hover {
      color: var(--color-link);
      text-decoration: underline;
    }
  }

  .section.column {
    padding-bottom: 0;
  }

  .social-network {
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
  }
}
// Responsiveness tweaks for footer elements
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
</style>
