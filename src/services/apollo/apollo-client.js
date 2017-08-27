import { ApolloClient } from 'apollo-client'
import networkInterface from './network-interface'

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface
})

export default apolloClient
