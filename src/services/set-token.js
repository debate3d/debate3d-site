import { setToken as setApolloToken } from './apollo/apply-middleware'
import { setToken } from '../helpers'

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
