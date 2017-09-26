import MutationCreateTopic from './create-topic-mutation.gql'
import { pick } from 'lodash'
import {
  mutationResolveHelper,
  mutationRejectHelper
} from '@/helpers'

const factory = data => pick(data, ['title', 'id_position', 'content'])

export default (context, data) => {
  const topic = factory(data)

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
