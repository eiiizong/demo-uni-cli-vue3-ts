import { defineStore } from 'pinia'
/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */

/**
 * store 系统信息
 */
const useStoreSystemInfo = defineStore({
  id: 'storeSystemInfo',
  //state必须是函数，必须是箭头函数，为了更好的TS类型推导
  state: () => {
    return {
      systemInfo: {},
    }
  },

  getters: {
    getStoreSystemInfo(state) {
      return state.systemInfo
    },
  },
  actions: {
    // 不要使用箭头函数定义action,因为箭头函数绑定外部this
    updateStoreSystemInfo(data: UniApp.GetSystemInfoResult) {
      console.log('updateStoreSystemInfo=========', data)
      this.systemInfo = data
    },
  },
})

export { useStoreSystemInfo }
