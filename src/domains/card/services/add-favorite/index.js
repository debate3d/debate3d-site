import AddDeck from './mutation.gql'

import {
  EventBus,
  mutationResolveHelper,
  mutationRejectHelper,
  pontuation
} from '@/helpers'

export default (context, uid_card) => { // eslint-disable-line
  const successArgs = [
    context,
    `Você ganhou ${pontuation.USER.STORE_CARD} pontos`,
    'InsertTopic'
  ]

  const errorArgs = [
    context,
    'Não foi possível guardar no deck'
  ]

  const data = { uid_card }
  return context.$apollo.mutate({
    mutation: AddDeck,
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
