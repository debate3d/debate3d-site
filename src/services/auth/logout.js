import { removeUser, setHasLogged, setToken } from '../../helpers'
import store from '../../store'
import router from '../../router'

export default () => {
  store.commit('SET_USER', {})
  store.commit('GET_CARDS_USER', [])
  store.commit('GET_DECK_CARDS_USER', [])
  store.commit('GET_REACTIONS_CARDS_USER', [])
  store.commit('GET_TOPICS_CARDS_USER', [])
  removeUser()
  setHasLogged(false)
  setToken('')
  router.push('/login')
}
