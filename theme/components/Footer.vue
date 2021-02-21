<template>
  <footer class="tach-footer footer">
    <div class="tach-wrapper">
      <div class="container">
        <section class="section" v-if="$themeConfig.footer.social_network">
          <div class="social-network">
            <ul>
              <li v-for="(item, index) in $themeConfig.footer.social_network" :key="index">
                <a class="icon" :href="item.path" target="_blank" rel="noopener">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </section>
        <section class="section">
          <!-- &#xfe0e; to prevent rendering ❤︎ as an emoji in iOS/Android -->
          <div class="copyright">
            © {{ siteDate }} {{ $siteConfig.author }}. Made with <span style="color:#b30e2e">❤︎&#xfe0e;</span> in Guangzhou
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
.tach-footer {
  margin-top: var(--gap-l);
  padding: 0 0 3rem 0;
  background: var(--color-background);
  color: var(--color-text-primary);
  font-size: var(--font-size-small);

  .section {
    text-align: center;
    margin-top: var(--gap-s);
  }

  .social-network {
    ul {
      list-style-type: none;
      margin: 0;
      li {
        display: inline-block;

        &+li {
          margin-left: var(--gap-m);
        }
      }
    }
  }
}
</style>
