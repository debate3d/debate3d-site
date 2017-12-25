import { removeUser, setHasLogged, setToken, removeLastRoute } from '../../helpers'
import store from '../../store'
import router from '../../router'

export default () => {
  store.commit('SET_USER', {})
  store.commit('GET_CARDS_USER', [])
  store.commit('GET_DECK_CARDS_USER', [])
  store.commit('GET_REACTIONS_USER', [])
  store.commit('GET_TOPICS', [])
  store.commit('GET_VOTES_USER', [])
  store.commit('IS_LOGGED', false)
  removeUser()
  removeLastRoute()
  setHasLogged(false)
  setToken('')
  router.push('/auth/login')
}
