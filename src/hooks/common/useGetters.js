import { mapGetters, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'

/**
 * useGetters
 * @param {String} moduleName vuex 模块名
 * @param {Array} mapper state<> ['userInfo']
 * @returns
 */
const useGetters = (moduleName, mapper) => {
  let mapperFn = mapGetters
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters
  } else {
    mapper = moduleName
  }
  return useMapper(mapper, mapperFn)
}

export { useGetters }
