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
export default (payload, store) => http.post('/auth/users', payload)
 .then(response => setToken(response.data.token))
 .then(token => {
   return setUser(store)
     .then(result => {
       Promise.resolve(result)
     })
 })
 .catch(error => {
   console.error(error)
   Promise.reject(error)
 })
