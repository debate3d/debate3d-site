import { cloneDeep } from 'lodash'
import { curry } from 'ramda'

/**
 * success helper for mutation
 * @param  {Object} context    Vue instance
 * @param  {String} msgSuccess
 * @param  {String} property   property for get from result object
 * @param  {Result} result
 * @return {Promise}
 */
export default curry((context, msgSuccess, property, ponts, result) => {
  const data = result.data[property]
  const user = cloneDeep(context.user)
  user.cards.records.push(data)
  user.ponts += ponts
  context.$store.dispatch('setUser', user)
  context.$emit('done')
  context.$snackbar.open({
    message: msgSuccess,
    type: 'is-success',
    position: 'is-bottom-right',
    actionText: 'OK'
  })
  return Promise.resolve(user)
})
