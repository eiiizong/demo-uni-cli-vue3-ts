import { createStore, createLogger } from 'vuex'

import { useGetIsDev } from '@/hooks/common'

import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import modules from './modules'

const isDevEnv = useGetIsDev()

const store = createStore({
  state,
  mutations,
  getters,
  actions,
  modules,
  plugins: isDevEnv ? [createLogger()] : [],
})
export default store
