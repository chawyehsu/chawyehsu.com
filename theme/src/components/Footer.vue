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
          <div class="copyright" v-text="`© ${siteDate} ${$siteConfig.author}. Made with ♥ in Guangzhou`"></div>
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
