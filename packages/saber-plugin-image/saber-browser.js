import { withBreakpoints } from './components/SaberImage'

export default ({ Vue }) => {
  // eslint-disable-next-line no-undef
  const options = __SABER_IMAGE_OPTIONS__
  const component = withBreakpoints(options.breakpoints)
  Vue.component(component.name, component)
}
