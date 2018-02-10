import messaging from '../index'
import getToken from './get-token'

/**
 * @method requestPermission
 * @return {Promise}
 */
export default user => {
  return messaging.requestPermission()
    .then(() => {
      return getToken(user)
    })
    .catch((err) => {
      console.error(err)
    })
}
