import AddDeck from './mutation.gql'

import {
  mutationResolveHelper,
  mutationRejectHelper
} from '@/helpers'

export default (context, uid_card) => { // eslint-disable-line
  const successArgs = [
    context,
    'Você ganhou 5 pontos',
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
    .catch(mutationRejectHelper(...errorArgs))
}
