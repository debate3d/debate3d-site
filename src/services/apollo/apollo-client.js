import ApolloClient from 'apollo-client'
import link from './link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import applyMiddleware from './apply-middleware'
import { concat } from 'apollo-link'

// Create the apollo client
const apolloClient = new ApolloClient({
  link: concat(applyMiddleware, link),
  cache: new InMemoryCache(),
  connectToDevTools: true
})

export default apolloClient
