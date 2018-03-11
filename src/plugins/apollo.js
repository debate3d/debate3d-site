import VueApollo from 'vue-apollo'
import apolloProvider from '../services/apollo'

export default ({ app, Vue }) => {
  Vue.use(VueApollo)
  app.provide = apolloProvider.provide()
}
