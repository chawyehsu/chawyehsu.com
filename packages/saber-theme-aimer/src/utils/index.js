import tinytime from 'tinytime'
import lozad from 'lozad'

const date = (date, format) => {
  const f = tinytime(format, {
    padDays: true,
    padMonth: true
  }).render
  return (date instanceof Date) ? f(date): f(new Date(date))
}

export {
  date,
  lozad
}
