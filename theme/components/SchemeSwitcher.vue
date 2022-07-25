<template>
  <a class="navbar-item scheme-switcher" @click.prevent="toggleScheme">
    <span>ok</span>
    <svg
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" class="feather feather-moon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" class="feather feather-sun">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'SchemeSwitcher',
  data () {
    return {
      isDark: undefined
    }
  },
  mounted () {
    const savedScheme = this.getScheme()
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    this.isDark = !savedScheme ? query.matches : savedScheme === 'dark'

    // Listen for `prefers-color-scheme` changes
    query.onchange = (e) => {
      this.isDark = e.matches
      this.updateClass()
      // Reset saved scheme when saved scheme matches e.matches
      e.matches === (this.getScheme() === 'dark') && this.saveScheme()
    }
  },
  methods: {
    getScheme () {
      try {
        return localStorage.getItem('user-color-scheme')
      } catch {
        return null
      }
    },
    saveScheme (value) {
      if (value) {
        try {
          localStorage.setItem('user-color-scheme', value)
        } catch {
          // no-op
        }
      } else {
        try {
          localStorage.removeItem('user-color-scheme')
        } catch {
          // no-op
        }
      }
    },
    updateClass() {
      const c = document.documentElement.classList
      this.isDark ? !c.contains('dark') && c.add('dark') : c.remove('dark')
    },
    toggleScheme() {
      console.log(this.isDark)
      this.isDark = !this.isDark
      this.isDark ? this.saveScheme('dark') : this.saveScheme('light')
      this.updateClass()
    }
  }
}
</script>

<style scoped>
.scheme-switcher {
  position: relative;
  background: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
}
.scheme-switcher span {
  text-decoration: none;
  opacity: 0;
}

.feather {
  position: absolute;
  opacity: 0;
  transition: opacity .2s;
}
.feather.feather-sun {
  opacity: 1;
}
.dark .feather.feather-moon {
  opacity: 1;
}
.dark .feather.feather-sun {
  opacity: 0;
}
/* <= 768px */
@media screen and (max-width: 768px) {
  .scheme-switcher {
    justify-content: center;
  }
}
</style>
