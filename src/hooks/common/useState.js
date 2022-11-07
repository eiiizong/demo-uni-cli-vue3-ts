import { mapState, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'

/**
 * useState
 * @param {String} moduleName vuex 模块名 非必传
 * @param {Array} mapper state<> ['userInfo']
 * @returns
 */
const useState = (moduleName, mapper) => {
  let mapperFn = mapState
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState
  } else {
    mapper = moduleName
  }
  return useMapper(mapper, mapperFn)
}

export { useState }
