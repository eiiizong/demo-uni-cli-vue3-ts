const nextTick = (fn) => {
  setTimeout(() => {
    fn()
  }, 1000 / 30)
}

export { nextTick }
