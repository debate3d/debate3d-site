/**
 * mutation helper
 * @param  {Object} context  Vue instance
 * @param  {Object} mutation GQL Object
 * @param  {Object} data     Object for mutation
 * @return {Promise}
 */
export default (context, mutation, data) => {
  return context.$apollo.mutate({
    mutation: mutation,
    variables: {
      data
    }
  })
}
