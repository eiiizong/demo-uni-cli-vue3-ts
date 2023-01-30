import type { Ref } from 'vue'
import type { Store } from '@/stores/types'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

/**
 * 命名规则：
 * 数据字段如: test
 * 方法名则为： useStoreTest
 * getter方法名则为： getStoreTest
 * actions方法名则为： updateStoreTest
 */
//
/**
 * store 用户信息
 */
const useStoreUserInfo = defineStore('storeUserInfo', () => {
  /**
   * 设置 userInfo
   */
  const userInfo: Ref<Store.StoreUserInfo> = ref({
    token: '',
    userId: '',
    userName: '',
    idCard: '',
    unitName: '',
    tel: '',
    openId: '',
    sessionKey: '',
    avatarUrl: '',
    userType: '',
  })

  /**
   * 获取 userInfo
   */
  const getStoreUserInfo = computed(() => userInfo.value)

  /**
   * 更新 userInfo
   */
  function updateStoreUserInfo(data: Store.StoreUserInfo) {
    userInfo.value = {
      ...userInfo.value,
      ...data,
    }
  }

  return { userInfo, getStoreUserInfo, updateStoreUserInfo }
})

export { useStoreUserInfo }
