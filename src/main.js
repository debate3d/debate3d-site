// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VueApollo from 'vue-apollo'
import SocialSharing from 'vue-social-sharing'
import apolloProvider from './services/apollo'
import Autocomplete from 'v-autocomplete'
import 'v-autocomplete/dist/v-autocomplete.css'

import FBSignInButton from 'vue-facebook-signin-button'
Vue.use(FBSignInButton)

Vue.use(Buefy, {
  defaultIconPack: 'fa'
})
Vue.use(VueApollo)
Vue.use(SocialSharing)
Vue.use(Autocomplete)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  apolloProvider,
  template: '<App/>',
  components: { App }
})
