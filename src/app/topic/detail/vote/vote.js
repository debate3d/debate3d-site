import VoteTopicMutation from './vote-topic-mutation.gql'
import {
  mutationResolveHelper,
  mutationRejectHelper
} from '@/helpers'

export default (context, data) => {
  const successArgs = [
    context,
    'Você ganhou 2 pontos',
    'VoteTopic'
  ]

  const errorArgs = [
    context,
    'Voto não computado'
  ]

  context.$apollo.mutate({
    mutation: VoteTopicMutation,
    variables: {
      data
    }
  })
    .then(mutationResolveHelper(...successArgs))
    .catch(mutationRejectHelper(...errorArgs))
    .then(result => {
      context.$emit('done')
      return Promise.resolve(true)
    })
    .catch(() => {
      context.btnDisabled = false
      return Promise.reject(false)
    })
}
