import { ApolloClient, createBatchingNetworkInterface } from 'apollo-client'

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createBatchingNetworkInterface({
    uri: 'http://localhost:3000/graphql'
  }),
  connectToDevTools: true
})

export default apolloClient
