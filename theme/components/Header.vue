<script>
import { clearBodyLocks, lock, unlock } from 'tua-body-scroll-lock'
import SchemeSwitcher from './SchemeSwitcher'

export default {
  components: {
    SchemeSwitcher,
  },
  beforeUnmount() {
    clearBodyLocks()
  },
  methods: {
    toggleNavbarMenu() {
      this.$refs.burger.classList.toggle('is-active')
      const $navbar = this.$refs.navbar
      $navbar.classList.toggle('is-active')
      if ($navbar.classList.contains('is-active')) {
        lock($navbar)
      } else {
        unlock($navbar)
      }
    },
  },
}
</script>

<template>
  <aside class="sidebar">
    <header>
      <div class="logo-outer flex">
        <a class="inline-block" :href="$themeConfig.header.logo_url" :title="$siteConfig.title">
          <svg class="logo block" fill="none" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h512v512H0z" fill="#000" />
            <path d="M39 39h104.423v34.808H39zM431.712 262.154h34.808V471h-34.808zM348.173 349.173h83.538v34.808h-83.538zM313.365 262.154h34.808V471h-34.808z" fill="#fff" />
            <path d="m247.23 296.96h34.808v34.808h-34.808zm-87.019-34.808h87.019v34.808h-87.019zm87.019 139.23h34.808v34.808h-34.808zm-87.019 34.807h87.019v34.808h-87.019zm-34.808-139.23h34.808v139.23h-34.808z" fill="#fff" />
          </svg>
        </a>
      </div>
      <div class="burger-outer">
        <span
          ref="burger"
          class="burger"
          @click="toggleNavbarMenu()"
        >
          <span />
          <span />
          <span />
        </span>
      </div>
    </header>
    <div ref="navbar" class="navbar">
      <nav>
        <ul>
          <li v-for="(item, index) in $themeConfig.header.nav" :key="index">
            <saber-link :to="item.path">
              {{ item.name }}
            </saber-link>
          </li>
          <li><SchemeSwitcher /></li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<style scoped>
.burger {
  z-index: 999;
  color: currentColor;
  cursor: pointer;
  display: block;
  height: 60px;
  position: relative;
  width: 60px;
  margin-left: auto;
}
.burger span {
  background-color: currentColor;
  display: block;
  height: 2px;
  left: calc(50% - 12px);
  position: absolute;
  transform-origin: center;
  transition-duration: 86ms;
  transition-property: background-color, opacity, transform;
  transition-timing-function: ease-out;
  width: 24px;
}
.burger span:nth-child(1) {
  top: calc(50% - 10px);
}
.burger span:nth-child(2) {
  top: calc(50% - 2px);
}
.burger span:nth-child(3) {
  top: calc(50% + 6px);
}
.burger.is-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.burger.is-active span:nth-child(2) {
  opacity: 0;
}
.burger.is-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}
/* <= 768px */
@media screen and (max-width: 768px) {
  header {
    padding: var(--gap-l) var(--gap-m);
    display: flex;
    justify-content: space-between;
  }
  .logo {
    height: 60px;
  }
  .navbar {
    background-color: var(--color-background);
    display: none;
    z-index: 998;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: calc(60px + var(--gap-l)) var(--gap-l) var(--gap-l);
    text-align: center;
    font-size: 160%;
    overflow: auto;
  }
  .navbar.is-active {
    display: block;
  }
  .navbar ul {
    margin: 0;
  }
  .navbar ul li {
    margin-bottom: var(--gap-m);
  }
}
/* > 768px */
@media screen and (min-width: 769px) {
  .logo-outer,
  .navbar {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }
  .logo-outer {
    margin-bottom: var(--gap-l);
  }
  .logo {
    width: 100%;
  }
  .navbar ul {
    margin: 0;
  }
  .navbar ul li {
    margin-bottom: var(--gap-s);
  }
  .burger {
    display: none;
  }
}
</style>
