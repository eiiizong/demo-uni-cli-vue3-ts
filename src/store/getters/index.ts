import { USER_INFO, USER_LIST } from '@/store/constants'

const getters = {
  // 获取用户信息
  [USER_INFO](state) {
    return state.userInfo
  },
  // 获取用户信息
  [USER_LIST](state) {
    return state.userList
  },
}

export default getters
