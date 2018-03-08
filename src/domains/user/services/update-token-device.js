import mutation from '../graphql/mutations/set-token-device.gql'

import graphqlClient from '../../../services/apollo/apollo-client'

export default (uid, tokenDevice) => {
  return graphqlClient.mutate({
    mutation,
    variables: {
      data: {
        uid,
        token_device: tokenDevice
      }
    }
  })
}
