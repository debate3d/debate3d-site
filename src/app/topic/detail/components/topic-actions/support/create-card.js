import { isEmpty, last, isString } from 'lodash'
import CreateCardMutation from './create-card.gql'
import {
  EventBus,
  mutationHelper,
  mutationResolveHelper,
  mutationRejectHelper,
  pontuation
} from '@/helpers'

const getEmbedUrl = url => {
  if (isEmpty(url) || !isString(url)) return ''

  if (url.includes('embed/')) return url

  const videoID = last(url.split('v='))
  return `https://www.youtube.com/embed/${videoID}`
}

/**
 * handler for create card mutation
 * @param  {Object} context Vue instance
 * @return {Promise}
 */
export default context => {
  const data = Object.assign({ }, {
    uid_topic: context.uid_topic,
    content: context.content,
    position: context.card_position,
    has_video: context.has_video,
    url_video: getEmbedUrl(context.url_video)
  })

  context.onSave = true

  const successArgs = [
    context,
    `Você ganhou ${pontuation.USER.CREATE_CARD} pontos`,
    'InsertCard'
  ]

  const errorArgs = [
    context,
    'O usuário não pode ter mais de um card cadastrado'
  ]

  return mutationHelper(context, CreateCardMutation, data)
    .then(() => mutationResolveHelper(...successArgs))
    .then(user => {
      EventBus.$emit('refresh:apollo')
      context.onSave = false
      context.content = ''
      context.$parent.close()
    })
    .catch(mutationRejectHelper(...errorArgs))
    .then(() => {
      context.onSave = false
    })
}
