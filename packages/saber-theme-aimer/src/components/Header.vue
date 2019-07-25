<template>
  <headroom
    class="site-header-room"
    :offset="155"
    :zIndex="99"
    :disabled="!$themeConfig.header.headroom">
    <header id="site-header" class="site-header">
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
                <saber-link :to="item.path">{{ item.name }}</saber-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </headroom>
</template>

<script>
import { headroom } from 'vue-headroom'

export default {
  components: {
    headroom
  }
}
</script>
