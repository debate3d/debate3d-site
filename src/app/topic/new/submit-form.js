import MutationCreateTopic from './create-topic-mutation.gql'
import {
  mutationResolveHelper,
  mutationRejectHelper,
  pontuation
} from '@/helpers'

export default (context, topic) => {
  const successArgs = [
    context,
    `Você ganhou ${pontuation.USER.CREATE_TOPIC} pontos`,
    'InsertTopic',
    10
  ]

  const errorArgs = [
    context,
    'Tópico não cadastrado'
  ]

  return context.$apollo.mutate({
    mutation: MutationCreateTopic,
    variables: {
      topic
    }
  })
    .then(mutationResolveHelper(...successArgs))
    .catch(mutationRejectHelper(...errorArgs))
}
