import mutation from './mutations/follow-topic.gql'

/**
 * @method followTopic
 * @param  {VueInstance} context
 * @param  {String}      uidUser
 * @param  {String}      uidTopic
 * @return {Promise}
 */
export default (context, uidUser, uidTopic) => {
  const data = {
    uid_user: uidUser,
    uid_topic: uidTopic
  }

  return context.$apollo.mutate({
    mutation,
    variables: { data }
  })
}
