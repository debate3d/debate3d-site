import { setToken } from '../../../support/helpers'
import getUser from './getMe'

/**
 * Set user on store object and manipulate route
 * @param  {Object} store  Store instance
 * @return {Promise}
 */
export default store => {
  return getUser()
    .then(user => {
      const { reactions, topics, cards, deck, votes, token_device } = user // eslint-disable-line
      store.dispatch('setUser', user)
      store.dispatch('getTopics', topics)
      store.dispatch('getReactions', reactions)
      store.dispatch('getDeck', deck)
      store.dispatch('getCards', cards)
      store.dispatch('getVotes', votes)
      return Promise.resolve(user)
    })
    .catch(error => {
      console.error(error)
      store.dispatch('setToken', null)
      setToken('')
      return Promise.reject(error)
    })
}
