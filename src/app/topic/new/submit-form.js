import MutationCreateTopic from './create-topic-mutation.gql'
import {
  mutationResolveHelper,
  mutationRejectHelper
} from '@/helpers'

export default (context, topic) => {
  const successArgs = [
    context,
    'Você ganhou 10 pontos',
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
