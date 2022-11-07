import { computed } from 'vue'
import { useStore } from 'vuex'

/**
 * useMapper
 * @param {Array} mapper
 * @param {Function} mapFn
 * @returns
 */
const useMapper = (mapper, mapFn) => {
  const store = useStore()

  const storeStateFns = mapFn(mapper)
  const storeState = {}
  Object.keys(storeStateFns).forEach((keyFn) => {
    const fn = storeStateFns[keyFn].bind({ $store: store })
    storeState[keyFn] = computed(fn)
  })

  return storeState
}

export { useMapper }
