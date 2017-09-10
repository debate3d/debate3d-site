import { createNetworkInterface } from 'apollo-client'
import applyMiddleware from './apply-middleware'

const networkInterface = createNetworkInterface({
  uri: `${process.env.URL_BASE}graphql`,
  connectToDevTools: true,
  transportBatching: true
})

networkInterface.use([{ applyMiddleware }])

export default networkInterface
