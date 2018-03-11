import { HttpLink } from 'apollo-link-http'

const link = new HttpLink({
  uri: `${process.env.API}graphql`
})

export default link
