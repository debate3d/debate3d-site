import messaging from '../index'

/**
 * @method getToken
 * @return {Promise}
 */
export default () => {
  messaging.getToken()
    .then((currentToken) => {
      if (currentToken) {
        // saveToken(currentToken)
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
