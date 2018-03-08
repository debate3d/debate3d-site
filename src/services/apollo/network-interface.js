import { HttpLink } from 'apollo-link-http'
// import applyMiddleware from './apply-middleware'
// import applyAfterware from './apply-afterware'

const link = new HttpLink({
  uri: `${process.env.URL_BASE}graphql`
})

// link.use([{ applyMiddleware }])

// link.useAfter([{ applyAfterware }])

export default link
