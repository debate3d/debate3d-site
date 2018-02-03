import messaging from '../index'
import { getToken } from './get-token'

/**
 * @method requestPermission
 * @return {Promise}
 */
export default () => {
  messaging.requestPermission()
    .then(() => {
      return getToken()
    })
    .catch((err) => {
      console.error(err)
    })
}
