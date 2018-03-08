import { setToken as setApolloToken } from './apollo/apply-middleware'
import { setToken } from '../support/helpers'

/**
 * Store token on Apollo and localStorage
 * @param  {String} token
 * @return {Promise}
 */
export default token => {
  setToken(token)
  setApolloToken(token)
  return Promise.resolve(token)
}
