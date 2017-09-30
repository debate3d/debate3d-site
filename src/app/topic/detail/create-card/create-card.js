import CreateCardMutation from './create-card.gql'
import {
  EventBus,
  mutationHelper,
  mutationResolveHelper,
  mutationRejectHelper,
  pontuation
} from '@/helpers'

/**
 * handler for create card mutation
 * @param  {Object} context Vue instance
 * @return {Promise}
 */
export default context => {
  const data = Object.assign({ }, {
    uid_topic: context.uid_topic,
    content: context.content,
    position: context.card_position
  })

  context.content = ''

  const successArgs = [
    context,
    `Você ganhou ${pontuation.USER.CREATE_CARD} pontos`,
    'InsertCard',
    10
  ]

  const errorArgs = [
    context,
    'O usuário não pode ter mais de um card cadastrado'
  ]

  return mutationHelper(context, CreateCardMutation, data)
    .then(mutationResolveHelper(...successArgs))
    .then(user => {
      EventBus.$emit('refresh:apollo')
      context.$parent.close()
    })
    .catch(mutationRejectHelper(...errorArgs))
}
