import LoginFacebookMutation from './mutations/login-facebook.gql'

import GraphQLClient from '@/services/apollo/apollo-client'

const login = data => {
  const mutation = {
    mutation: LoginFacebookMutation,
    variables: {
      data
    }
  }

  return GraphQLClient.mutate(mutation)
}

export default login
