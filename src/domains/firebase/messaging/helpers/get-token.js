import messaging from '../index'
import updateTokenDevice from '../../../user/services/update-token-device'

/**
 * @method getToken
 * @return {Promise}
 */
export default user => {
  return messaging.getToken()
    .then((currentToken) => {
      if (currentToken) {
        return updateTokenDevice(user.uid, currentToken)
          .then(() => currentToken)
      }
    })
    .catch((err) => {
      console.log(err)
      return err
    })
}
