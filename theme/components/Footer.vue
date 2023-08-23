<template>
  <footer>
    <div class="container">
      <section class="section">
        <div class="links" v-if="$themeConfig.footer">
          <ul>
            <li :key="index" v-for="(item, index) in $themeConfig.footer.links">
              <saber-link :to="item.path" v-text="item.name"></saber-link>
            </li>
          </ul>
        </div>
        <!-- &#xfe0e; to prevent rendering ❤︎ as an emoji in iOS/Android -->
        <div class="copyright">
          © {{ siteDate }} {{ $siteConfig.author }}. Made with <span style="font-family:sans-serif;color:#b30e2e">❤&#xfe0e;</span> from Guangzhou
        </div>
      </section>
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

<style scoped>
footer {
  padding: var(--gap-l) 0;
  background: var(--color-background);
  color: var(--color-text-primary);
  font-size: var(--font-size-small);
}
footer .section {
  text-align: center;
}
footer .links ul {
  margin: 0;
}
footer .links li {
  display: inline-block;
  margin-left: 0.5em;
}
/* > 767px */
@media screen and (min-width: 768px) {
  footer .section {
    text-align: right;
  }
}
</style>
