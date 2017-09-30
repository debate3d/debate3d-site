import UpdateUserMutation from './update-user-mutation.gql'
import { omit } from 'lodash'

export default context => {
  const data = omit(context.user, ['email'])

  return context.$apollo.mutate({
    mutation: UpdateUserMutation,
    variables: {
      data
    }
  })
}
