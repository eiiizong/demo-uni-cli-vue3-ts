import { setStorage } from '@/utils/uni-api'
import {
  M_UPDATE_USER_INFO,
  M_UPDATE_USER_LIST,
 
} from '@/store/constants'

const mutations = {
  // 更新用户信息
  [M_UPDATE_USER_INFO](state, data) {
    // 存在数据
    if (data) {
      state.userInfo = { ...state.userInfo, ...data }
      setStorage(USER_INFO, JSON.stringify(state.userInfo))
    } else {
      // 针对 null 用于清空用户数据
      state.userInfo = {}
      setStorage(USER_INFO, JSON.stringify({}))
    }
  },
  // 更新用户信息
  [M_UPDATE_USER_LIST](state, data) {
    // 存在数据
    if (data) {
      state.userList = { ...state.userList, ...data }
      setStorage(USER_LIST, JSON.stringify(state.userList))
    } else {
      // 针对 null 用于清空用户数据
      state.userList = {}
      setStorage(USER_LIST, JSON.stringify({}))
    }
  },
  
}

export default mutations
