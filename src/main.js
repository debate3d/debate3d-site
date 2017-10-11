import install from './install'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import apolloProvider from './services/apollo'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

// install all plugins
install(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  apolloProvider,
  template: '<App/>',
  components: { App }
})
