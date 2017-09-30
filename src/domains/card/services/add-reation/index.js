import AddReaction from './mutation.gql'

import {
  EventBus,
  mutationResolveHelper,
  mutationRejectHelper,
  pontuation
} from '@/helpers'

export default (context, data) => {
  const successArgs = [
    context,
    `Você ganhou ${pontuation.USER.VOTE_CARD} pontos`,
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
