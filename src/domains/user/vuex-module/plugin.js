import setUser from '../services/set-user'
import setToken from '../../../services/set-token'
import { isEmpty } from 'lodash'
import { getToken } from '../../../helpers'

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
      })
  }
}
