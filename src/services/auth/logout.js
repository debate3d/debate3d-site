import { setToken, removeLastRoute } from '../../support/helpers'
import store from '../../store'
import router from '../../router'

export default () => {
  store.commit('SET_USER', {})
  store.commit('GET_CARDS_USER', [])
  store.commit('GET_DECK_CARDS_USER', [])
  store.commit('GET_REACTIONS_USER', [])
  store.commit('GET_TOPICS', [])
  store.commit('GET_VOTES_USER', [])
  removeLastRoute()
  setToken('')
  router.push('/auth/login')
}
