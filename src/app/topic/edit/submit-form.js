import { isEmpty } from 'lodash'
import MutationCreateTopic from './create-topic-mutation.gql'
import {
  mutationResolveHelper,
  mutationRejectHelper
} from '@/helpers'

import { uploadImage } from '@/domains/cloudnary/services'

export default (context, file, topic) => {
  const successArgs = [
    context,
    `Tópico editado`
  ]

  const errorArgs = [
    context,
    'Tópico não editado'
  ]

  return uploadImage(file)
    .then(res => {
      if (!isEmpty(res)) {
        topic.url_image = res.data.secure_url
      }
      return context.$apollo.mutate({
        mutation: MutationCreateTopic,
        variables: {
          topic
        }
      })
        .then(mutationResolveHelper(...successArgs))
        .catch(mutationRejectHelper(...errorArgs))
    })
}
