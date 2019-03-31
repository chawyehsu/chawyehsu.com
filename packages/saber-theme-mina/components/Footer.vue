<template>
  <footer id="site-footer" class="site-footer">
    <div class="wrap">
      <div class="footer__section" v-if="$themeConfig.footer.nav">
        <nav class="footer-nav">
          <ul>
            <li v-for="(item, index) in $themeConfig.footer.nav" :key="index">
              <a
                v-if="item.name.toLocaleLowerCase() === 'rss'"
                :href="item.path"
                target="_blank">{{ item.name }}</a>
              <saber-link v-else :to="item.path">
                <a :href="item.path">{{ item.name }}</a>
              </saber-link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="footer__section" v-if="$themeConfig.footer.social_network">
        <div class="social-network">
          <ul>
            <li v-for="(item, index) in $themeConfig.footer.social_network" :key="index">
              <a :class="`icon ion-${item.icon}`" :href="item.path" target="_blank"></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__section">
        <div class="copy-right" v-text="`© ${siteDate} ${$siteConfig.author}`"></div>
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
