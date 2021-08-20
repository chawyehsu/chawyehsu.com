<template>
  <footer>
    <div class="container">
      <section class="section">
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
  padding: 3rem 0;
  background: var(--color-background);
  color: var(--color-text-primary);
  font-size: var(--font-size-small);
}
footer .section {
  text-align: center;
}
/* > 767px */
@media screen and (min-width: 768px) {
  footer .section {
    text-align: right;
  }
}
</style>
