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

nav {
  box-shadow: 0px 5px 60px 0px rgba(23, 33, 33, 0.1);
}

a.navbar-item:focus,
a.navbar-item:hover {
  color: $highlight-color;
}

// dark-mode
@mixin header-dark-mode {
  nav.navbar {
    box-shadow: none;
    background-color: $background-invert;
    color: $text-color-invert;
  }
}

@media (prefers-color-scheme: dark) {
  @include header-dark-mode();
}

// Force dark mode
html.dark-mode {
  @include header-dark-mode();
}
</style>
