<template>
  <aside class="sidebar">
    <header>
      <div class="logo-outer flex">
        <a class="inline-block" :href="$themeConfig.header.logo_url" :title="$siteConfig.title">
            <svg class="logo block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 512 512">
              <path fill="#000" d="M0 0h512v512H0z"/>
              <path fill="#fff" d="M39 39h104.423v34.808H39zM431.712 262.154h34.808V471h-34.808zM348.173 349.173h83.538v34.808h-83.538zM313.365 262.154h34.808V471h-34.808z"/>
              <g>
                <path fill="#fff" d="M247.231 296.962h34.808v34.808h-34.808zM160.212 262.154h87.019v34.808h-87.019zM247.231 401.385h34.808v34.808h-34.808zM160.212 436.192h87.019V471h-87.019zM125.404 296.962h34.808v139.231h-34.808z"/>
              </g>
            </svg>
        </a>
      </div>
      <div class="burger-outer">
        <span
          @click="toggleNavbarMenu()"
          ref="burger"
          class="burger">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
    </header>
    <div class="navbar" ref="navbar">
      <nav>
        <ul>
          <li :key="index" v-for="(item, index) in $themeConfig.header.nav">
            <saber-link
            :to="item.path"
            v-text="item.name">
            </saber-link>
          </li>
          <li><SchemeSwitcher /></li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
import SchemeSwitcher from './SchemeSwitcher'
import { lock, unlock, clearBodyLocks } from 'tua-body-scroll-lock'

export default {
  components: {
    SchemeSwitcher
  },
  methods: {
    toggleNavbarMenu () {
      this.$refs.burger.classList.toggle('is-active')
      const $navbar = this.$refs.navbar
      $navbar.classList.toggle('is-active')
      if ($navbar.classList.contains('is-active')) {
        lock($navbar)
      } else {
        unlock($navbar)
      }
    }
  },
  beforeDestroy () {
    clearBodyLocks()
  }
}
</script>

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
