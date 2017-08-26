import apolloClient from './apollo-client'
import VueApollo from 'vue-apollo'

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export default apolloProvider
