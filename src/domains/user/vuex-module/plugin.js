import { isEmpty } from 'lodash'

import setUser from '../services/set-user'
import setToken from '../../../services/set-token'
import { getToken, setToken as _setToken } from '../../../helpers'
import router from '../../../router'

/**
 * Plugin on module user
 * @param  {Objet} store Store instance
 */
export default store => {
  const token = getToken()
  if (!isEmpty(token)) {
    store.dispatch('setToken', token)

    return setToken(token)
      .then(_ => {
        return setUser(store)
          .then(user => {
            router.push('/dashboard')
            store.dispatch('setTokenDevice')
          })
          .catch(err => {
            console.error(err)
            _setToken('')
            store.dispatch('setToken', '')
            router.push('/auth/login')
            return false
          })
      })
  }
}
