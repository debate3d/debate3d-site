import { createNetworkInterface } from 'apollo-client'
import applyMiddleware from './apply-middleware'

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql',
  connectToDevTools: true,
  transportBatching: true
})

networkInterface.use([{ applyMiddleware }])

export default networkInterface
