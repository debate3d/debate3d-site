import { createNetworkInterface } from 'apollo-client'
import applyMiddleware from './apply-middleware'
import applyAfterware from './apply-afterware'

const networkInterface = createNetworkInterface({
  uri: `${process.env.URL_BASE}graphql`,
  connectToDevTools: true,
  transportBatching: true
})

networkInterface.use([{ applyMiddleware }])

networkInterface.useAfter([{ applyAfterware }])

export default networkInterface
