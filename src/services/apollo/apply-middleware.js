import { ApolloLink } from 'apollo-link'

let token

export const setToken = value => {
  token = value
}

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: token
    }
  })

  return forward(operation)
})

export default authMiddleware
