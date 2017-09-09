import { setHasLogged, setToken } from '../../../helpers'
import getUser from './getMe'
import router from '../../../router'

/**
 * Set user on store object and manipulate route
 * @param  {Object} store  Store instance
 * @return {Promise}
 */
export default store => {
  return getUser()
    .then(response => {
      const user = response.data.me
      setHasLogged(true)
      const { reactions, topics, cards, deck } = user
      store.dispatch('setUser', user)
      store.dispatch('getTopics', topics)
      store.dispatch('getReactions', reactions)
      store.dispatch('getDeck', deck)
      store.dispatch('getCards', cards)
      store.dispatch('isLogged', true)
      router.push('/dashboard')
      return Promise.resolve()
    })
    .catch(error => {
      console.error(error)
      setToken('')
      setHasLogged(false)
      store.dispatch('isLogged', false)
      router.push('/login')
      return Promise.reject(error)
    })
}
