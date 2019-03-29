<template>
  <header id="site-header" class="site-header header__fixed">
    <div class="wrap columns is-gapless is-mobile">
      <div class="column is-3-desktop">
        <saber-link class="site-title" :to="$themeConfig.header.logo_url">
          {{ $themeConfig.title || $siteConfig.title }}
        </saber-link>
      </div>
      <div v-if="$themeConfig.header.nav" class="topbar-nav-wrap column is-9-desktop">
        <nav class="topbar-nav">
          <ul>
            <li v-for="(item, index) in $themeConfig.header.nav" :key="index">
              <a v-if="item.path === '/'" :href="item.path">{{ item.name }}</a>
              <saber-link v-else :to="item.path">{{ item.name }}</saber-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import Headroom from 'headroom.js'

export default {
  mounted () {
    const header = () => {
      const el = document.querySelector('.site-header')
      const options = {
        tolerance: 5,
        offset: 155,
        classes: {
          initial: 'animated',
          pinned: 'slideDown',
          unpinned: 'slideUp'
        }
      }
      new Headroom(el, options).init()
    }
    header()
  }
}
</script>
