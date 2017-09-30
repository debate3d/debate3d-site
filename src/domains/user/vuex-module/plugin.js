import { isEmpty } from 'lodash'

import setUser from '../services/set-user'
import setToken from '../../../services/set-token'
import { getToken } from '../../../helpers'
import router from '../../../router'

/**
 * Plugin on module user
 * @param  {Objet} store Store instance
 */
export default store => {
  const token = getToken()
  if (!isEmpty(token)) {
    setToken(token)
      .then(_ => {
        setUser(store)
          .then(user => {
            router.push('/dashboard')
            return true
          })
          .catch(err => {
            console.error(err)
            router.push('/auth/login')
            return false
          })
      })
  }
}
