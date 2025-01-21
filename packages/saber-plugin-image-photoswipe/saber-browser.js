export default ({ Vue }) => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-undef
    Vue.use(require('vue-pswipe').default, __SABER_PHOTOSWIPE_OPTIONS__)
  }
}
