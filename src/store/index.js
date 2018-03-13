import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

import auth from '../domains/user/vuex-module'

Vue.use(Vuex)

const store = new Vuex.Store({
  state,
  mutations,
  modules: {
    auth
  }
})

export default store
