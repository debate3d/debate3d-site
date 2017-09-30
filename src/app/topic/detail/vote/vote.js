import VoteTopicMutation from './vote-topic-mutation.gql'
import {
  EventBus,
  mutationResolveHelper,
  mutationRejectHelper,
  pontuation
} from '@/helpers'

export default (context, data) => {
  const successArgs = [
    context,
    `Você ganhou ${pontuation.USER.VOTE_THEME} pontos`,
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
      EventBus.$emit('refresh:apollo')
      return Promise.resolve(true)
    })
    .catch(() => {
      context.btnDisabled = false
      return Promise.reject(false)
    })
}
