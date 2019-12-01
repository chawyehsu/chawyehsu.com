<template>
  <header class="tach-header">
    <div class="tach-wrapper">
    <nav class="navbar">
      <div class="container">
        <div class="column navbar-brand">
          <saber-link
            class="navbar-item site-title"
            :to="$themeConfig.header.logo_url">
            {{ $themeConfig.title || $siteConfig.title }}
          </saber-link>
          <span
            @click="toggleNavbarMenu()"
            ref="burger"
            class="navbar-burger burger">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          v-if="$themeConfig.header.nav"
          ref="menu"
          class="column navbar-menu">
          <div class="navbar-end">
            <saber-link
              class="navbar-item"
              v-for="(item, index) in $themeConfig.header.nav"
              :key="index"
              :to="item.path">
              {{ item.name }}
            </saber-link>
          </div>
        </div>
      </div>
    </nav>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    toggleNavbarMenu () {
      this.$refs.burger.classList.toggle('is-active')
      this.$refs.menu.classList.toggle('is-active')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/components/variables';

a.navbar-item:focus,
a.navbar-item:hover {
  color: $highlight-color;
}
</style>
