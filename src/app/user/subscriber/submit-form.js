import SubscriberMutation from './subscriber-mutation.gql'

import {
  mutationResolveHelper,
  mutationRejectHelper
} from '@/helpers'

export default (context, data) => {
  const successArgs = [
    context,
    `Agora você é um assinante`,
    'CreateSubscriber',
    0
  ]

  const errorArgs = [
    context,
    'Cupom inválido'
  ]

  return context.$apollo.mutate({
    mutation: SubscriberMutation,
    variables: {
      data
    }
  })
    .then(mutationResolveHelper(...successArgs))
    .catch(mutationRejectHelper(...errorArgs))
}
