import Vue from 'vue'
import Vuex from 'vuex'

import auth from '../domains/user/vuex-module'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth
  }
})

export default store
