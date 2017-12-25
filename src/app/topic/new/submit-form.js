import MutationCreateTopic from './create-topic-mutation.gql'
import {
  mutationResolveHelper,
  mutationRejectHelper,
  pontuation
} from '@/helpers'

import { uploadImage } from '@/domains/cloudnary/services'

export default (context, file, topic) => {
  const successArgs = [
    context,
    `Você ganhou ${pontuation.USER.CREATE_TOPIC} pontos`,
    'InsertTopic'
  ]

  const errorArgs = [
    context,
    'Tópico não cadastrado'
  ]

  return uploadImage(file)
    .then(res => {
      topic.url_image = res.data.secure_url
      return context.$apollo.mutate({
        mutation: MutationCreateTopic,
        variables: {
          topic
        }
      })
        .then(() => mutationResolveHelper(...successArgs))
        .catch(mutationRejectHelper(...errorArgs))
    })
}
