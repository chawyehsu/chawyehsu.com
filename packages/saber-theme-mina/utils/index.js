import tinytime from 'tinytime'

const date = (date, format) => {
  const f = tinytime(format).render
  return (date instanceof Date) ? f(date): f(new Date(date))
}

export {
  date
}
