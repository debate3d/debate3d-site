import { curry } from 'ramda'

import setUser from '@/domains/user/services/set-user'

/**
 * success helper for mutation
 * @param  {Object} context    Vue instance
 * @param  {String} msgSuccess
 * @param  {String} property   property for get from result object
 * @param  {Result} result
 * @return {Promise}
 */
export default curry((context, msgSuccess, property, ponts, result) => {
  return setUser(context.$store)
    .then(user => {
      context.$snackbar.open({
        message: msgSuccess,
        type: 'is-success',
        position: 'is-bottom-right',
        actionText: 'OK'
      })
      return Promise.resolve(user)
    })
    .catch(console.error)
})
