import { createStore, createLogger } from 'vuex'

import { getIsDev } from '@/utils/get'

import state from './state/index.js'
import mutations from './mutations/index.js'
import getters from './getters/index.js'
import actions from './actions/index.js'
import modules from './modules/index.js'

const isDevEnv = getIsDev()

const store = createStore({
  state,
  mutations,
  getters,
  actions,
  modules,
  plugins: isDevEnv ? [createLogger()] : [],
})
export default store
