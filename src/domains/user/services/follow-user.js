import mutation from '../graphql/mutations/follow-moderator.gql'

/**
 * @method followTopic
 * @param  {VueInstance} context
 * @param  {String}      uidUser
 * @param  {String}      uidTopic
 * @return {Promise}
 */
export default (context, uidUser, uidModerator) => {
  const data = {
    uid_user: uidUser,
    uid_moderator: uidModerator
  }

  return context.$apollo.mutate({
    mutation,
    variables: { data }
  })
}
