<template>
  <header class="tach-header">
    <div class="tach-wrapper">
      <nav class="navbar">
        <div class="container">
          <div class="column navbar-brand">
            <saber-link
              class="navbar-item site-title"
              :to="$themeConfig.header.logo_url"
              v-text="$themeConfig.title || $siteConfig.title">
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
                :to="item.path"
                v-text="item.name">
              </saber-link>
              <SchemeSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import SchemeSwitcher from './SchemeSwitcher'

export default {
  components: {
    SchemeSwitcher
  },
  methods: {
    toggleNavbarMenu () {
      this.$refs.burger.classList.toggle('is-active')
      this.$refs.menu.classList.toggle('is-active')
    }
  }
}
</script>

<style lang="scss" scoped>
// Reset bulma navbar color
.navbar {
  background-color: var(--color-background);
  color: var(--color-text-primary);
}
// Reset bulma navbar item color
.navbar-item,
.navbar-link,
.navbar-burger {
  color: var(--color-text-primary);
}
// Reset bulma navbar a element color
.navbar-item:focus,
.navbar-item:hover,
.navbar-burger:focus,
.navbar-burger:hover {
  background-color: var(--color-background);
  color: var(--color-link);
}
.navbar-item.site-title {
  background: none;
}
</style>
