import { omit } from 'lodash'

import UpdateUserMutation from './update-user-mutation.gql'
import { mutationResolveHelper, mutationRejectHelper } from '@/helpers'

export default context => {
  const data = omit(context.user, ['email'])

  const resolve = [
    context,
    'Dados atualizados'
  ]

  const errors = [
    context,
    'Não foi possível atualizar os dados'
  ]

  return context.$apollo.mutate({
    mutation: UpdateUserMutation,
    variables: {
      data
    }
  })
    .then(mutationResolveHelper(...resolve))
    .catch(mutationRejectHelper(...errors))
}
