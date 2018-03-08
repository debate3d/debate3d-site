import http from '../http.js'
import setToken from '../set-token'
import setUser from '../../domains/user/services/set-user'
// import { getLastRoute } from '@/helpers'

/**
 * Login function
 * @param  {Object} payload paylod for login
 * @param  {Objet} store   Store instance
 * @param  {Object} router  Router instance
 * @return {Promise}
 */
export default (payload, store, router) => {
  return http.post('/auth/login', payload)
    .then(response => setToken(response.data.token))
    .then(token => {
      return setUser(store)
        .then(result => {
          const isVerified = result.is_verified
          if (!isVerified) {
            router.push('/auth/finish')
            return
          }
          // const lastRoute = getLastRoute()
          // const toRoute = lastRoute || '/dashboard'
          // router.push(toRoute)
          return Promise.resolve(result)
        })
    })
}
