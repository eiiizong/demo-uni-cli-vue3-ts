import {
  USER_INFO,
  USER_LIST,
  CORPORATE_INFO,
  TOKEN,
  SUBSIDY_PROJECT_DECLARE_INFO,
} from '@/store/constants/index.js'

const getters = {
  // 获取用户信息
  [USER_INFO](state) {
    return state.userInfo
  },
  // 获取用户信息
  [USER_LIST](state) {
    return state.userList
  },
  [CORPORATE_INFO](state) {
    return state.corporateInfo
  },
  [TOKEN](state) {
    return state.state
  },
  // 获取申报信息
  [SUBSIDY_PROJECT_DECLARE_INFO](state) {
    return state.subsidyProjectDeclaraInfo
  },
}

export default getters
