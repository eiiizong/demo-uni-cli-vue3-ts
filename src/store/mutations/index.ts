import { MutationTree } from 'vuex'
import { AppState } from '@/store/types/state'
import { AppMutationTypes } from '@/store/types/mutation'

export type Mutations<S = AppState> = {
  [AppMutationTypes.M_UPDATE_USER_INFO](state: S, token: string): void,
  [AppMutationTypes.M_UPDATE_USER_LIST](state: S, token: string): void,
}

const mutations: MutationTree<AppState> & Mutations = {
  [AppMutationTypes.M_UPDATE_USER_INFO](state: AppState, token: string) {
    state.token = token
  },
  [AppMutationTypes.M_UPDATE_USER_LIST](state: AppState, token: string) {
    state.token = token
  },
}

export default mutations
