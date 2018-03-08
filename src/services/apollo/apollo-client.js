import ApolloClient from 'apollo-client'
import link from './network-interface'
import { InMemoryCache } from 'apollo-cache-inmemory'

// Create the apollo client
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true
})

export default apolloClient
