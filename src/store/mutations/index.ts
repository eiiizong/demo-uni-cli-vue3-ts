import { M_UPDATE_USER_INFO, M_UPDATE_USER_LIST } from '@/store/constants'

interface Mutations {
  M_UPDATE_USER_INFO():void,
  M_UPDATE_USER_LIST():void,
}

const mutations:Mutations = {
  // 更新用户信息
  [M_UPDATE_USER_INFO](state: any, data: Object) {
    // 存在数据
    if (data) {
      state.userInfo = { ...state.userInfo, ...data }
    } else {
      // 针对 null 用于清空用户数据
      state.userInfo = {}
    }
  },
  // 更新用户信息
  [M_UPDATE_USER_LIST](state: any, data: Object) {
    // 存在数据
    if (data) {
      state.userList = { ...state.userList, ...data }
    } else {
      // 针对 null 用于清空用户数据
      state.userList = {}
    }
  },
}

export default mutations
