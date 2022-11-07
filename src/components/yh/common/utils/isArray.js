const isArray = (value) => {
  const res = value && value.constructor === 'Array'
  return res
}

export { isArray }
