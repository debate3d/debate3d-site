import messaging from '../index'
import getToken from './get-token'

export default user => {
  return messaging.onTokenRefresh(() => {
    console.log('on refresh')
    return getToken(user)
  })
}
