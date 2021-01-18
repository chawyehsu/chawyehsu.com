export default ({ Vue }) => {
  if (process.browser) {
    Vue.use(require('vue-pswipe').default, __SABER_PHOTOSWIPE_OPTIONS__)
  }
}
