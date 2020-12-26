<template>
  <a class="navbar-item scheme-switcher" @click.prevent="toggleScheme">
    <svg
      v-if="currentScheme === 'dark'"
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" class="feather feather-sun">
      <circle cx="12" cy="12" r="5"/>
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round" class="feather feather-moon">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  </a>
</template>

<script>
export default {
  name: 'SchemeSwitcher',
  data () {
    return {
      currentScheme: 'dark'
    }
  },
  mounted () {
    // A. prefers-color-scheme
    const m = window.matchMedia('(prefers-color-scheme: dark)')
    // init currentScheme by `prefers-color-scheme`
    this.currentScheme = m.matches ? 'dark' : 'light'
    // add `onchange` event listener for `prefers-color-scheme`
    m.addEventListener('change', e => {
      // console.log(`prefers-color-scheme changed to ${e.matches ? 'dark' : 'light'}`)
      // 1. delete localStorage color-scheme
      this.setUserSelectedScheme()
      // 2. remove root element's color-scheme classes
      document.documentElement.classList.remove('light')
      document.documentElement.classList.remove('dark')
      // 3. update currentScheme by prefers-color-scheme
      this.currentScheme = e.matches ? 'dark' : 'light'
    })

    // B. localStorage
    const selectedScheme = this.getUserSelectedScheme()
    if (selectedScheme === 'dark' || selectedScheme === 'light') {
      // 1. add color-scheme class to root element
      if (!document.documentElement.classList.contains(selectedScheme)) {
        document.documentElement.classList.add(selectedScheme)
      }
      // 2. update currentScheme by localStorage
      this.currentScheme = selectedScheme
    } else {
      // clear unexpected localStorage value
      this.setUserSelectedScheme()
    }
  },
  methods: {
    getUserSelectedScheme () {
      try {
        return localStorage.getItem('user-color-scheme')
      } catch {
        return null
      }
    },
    setUserSelectedScheme (value) {
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
    toggleScheme() {
      let userSelectedScheme = this.getUserSelectedScheme()
      const inverted = { 'dark': 'light', 'light': 'dark' }

      if (userSelectedScheme === null) {
        // 1. No localStorage color-scheme, save inverted `prefers-color-scheme`
        userSelectedScheme = inverted[this.currentScheme]
        this.setUserSelectedScheme(userSelectedScheme)
        // 2. then apply it to root element
        document.documentElement.classList.add(userSelectedScheme)
        // 3. update currentScheme
        this.currentScheme = userSelectedScheme
      } else if (userSelectedScheme === 'dark' || userSelectedScheme === 'light') {
        // 1. localStorage color-scheme detected, remove old color-scheme
        if (document.documentElement.classList.contains(userSelectedScheme)) {
          document.documentElement.classList.remove(userSelectedScheme)
        }
        // 2. save save inverted localStorage color-scheme
        userSelectedScheme = inverted[userSelectedScheme]
        this.setUserSelectedScheme(userSelectedScheme)
        // 3. then apply it to root element
        document.documentElement.classList.add(userSelectedScheme)
        // 4. update currentScheme
        this.currentScheme = userSelectedScheme
      }
    }
  }
}
</script>
