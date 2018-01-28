import http from '../http.js'
import setToken from '../set-token'
import setUser from '../../domains/user/services/set-user'

/**
 * Register function
 * @param  {Object} payload paylod for login
 * @param  {Objet} store   Store instance
 * @param  {Object} router  Router instance
 * @return {Promise}
 */
export default (payload, store) => {
  return http.post('/auth/users', payload)
    .then(response => setToken(response.data.token))
    .then(token => {
      return setUser(store)
        .then(result => {
          return Promise.resolve(result)
        })
    })
}
