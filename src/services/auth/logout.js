import { removeUser, setHasLogged, setToken } from '../../helpers'
import store from '../../store'
import router from '../../router'

export default () => {
  store.commit('SET_USER', {})
  store.commit('ADD_ARGUMENTS_USER', [])
  store.commit('ADD_DECK_ARGUMENTS_USER', [])
  removeUser()
  setHasLogged(false)
  setToken('')
  router.push('/home')
}
