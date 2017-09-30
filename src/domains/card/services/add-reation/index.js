import AddReaction from './mutation.gql'

import {
  EventBus,
  mutationResolveHelper,
  mutationRejectHelper
} from '@/helpers'

export default (context, data) => {
  const successArgs = [
    context,
    'Você ganhou 2 pontos',
    'InsertTopic'
  ]

  const errorArgs = [
    context,
    'Não foi possível reagir'
  ]

  return context.$apollo.mutate({
    mutation: AddReaction,
    variables: {
      data
    }
  })
    .then(mutationResolveHelper(...successArgs))
    .then(() => {
      EventBus.$emit('refresh:apollo')
    })
    .catch(mutationRejectHelper(...errorArgs))
}
