export default ({ Vue }) => {
  if (typeof window !== 'undefined') {
    Vue.component(
      'Photoswipe',
      () => import(/* webpackChunkName: "photoswipe" */ 'vue-pswipe').then(({ Photoswipe }) => Photoswipe),
    )
  }
}
