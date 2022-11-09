import { MutationTree } from 'vuex'
import { AppState, AppStateUserInfo } from '@/store/types/state'
import { AppMutationTypes } from '@/store/types/mutation'

export type Mutations<S = AppState> = {
  [AppMutationTypes.M_UPDATE_USER_INFO](state: S, data: AppStateUserInfo): void
  // [AppMutationTypes.M_UPDATE_USER_LIST](state: S, data: AppStateUserInfo): void
}

const mutations: MutationTree<AppState> & Mutations = {
  [AppMutationTypes.M_UPDATE_USER_INFO](state: AppState, data: AppStateUserInfo) {
    // 存在数据
    if (data) {
      state.userInfo = {
        ...state.userInfo,
        ...data,
      }
    } else {
      state.userInfo = {}
    }
  },
  // [AppMutationTypes.M_UPDATE_USER_LIST](state: AppState, data: AppStateUserInfo) {
  //   if (data) {
  //     state.userInfo = {
  //       ...state.userInfo,
  //       ...data,
  //     }
  //   } else {
  //     state.userInfo = {}
  //   }
  // },
}

export default mutations
