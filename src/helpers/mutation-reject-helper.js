import { curry } from 'ramda'

/**
 * error helper for mutation
 * @param  {Object} context  Vue instance
 * @param  {String} msgError
 * @param  {Error} err
 * @return {Promise}
 */
export default curry((context, msgError, err) => {
  console.error(err)
  context.$snackbar.open({
    message: msgError,
    type: 'is-warning',
    position: 'is-bottom-left',
    actionText: 'OK'
  })
})
