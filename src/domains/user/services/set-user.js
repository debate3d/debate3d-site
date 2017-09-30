import { setHasLogged, setToken } from '../../../helpers'
import getUser from './getMe'

/**
 * Set user on store object and manipulate route
 * @param  {Object} store  Store instance
 * @return {Promise}
 */
export default store => {
  return getUser()
    .then(user => {
      setHasLogged(true)
      const { reactions, topics, cards, deck, votes } = user
      store.dispatch('setUser', user)
      store.dispatch('getTopics', topics)
      store.dispatch('getReactions', reactions)
      store.dispatch('getDeck', deck)
      store.dispatch('getCards', cards)
      store.dispatch('getVotes', votes)
      store.dispatch('isLogged', true)
      return Promise.resolve(user)
    })
    .catch(error => {
      console.error(error)
      setToken('')
      setHasLogged(false)
      store.dispatch('isLogged', false)
      return Promise.reject(error)
    })
}
