// A forma como está sendo feita o import dos arquivo foi devido a um erro de
// import em que não consegui solucionar
import setHasLogged from '../../../helpers/setHasLogged.js'
import setToken from '../../../helpers/setToken.js'
import router from '../../../router'
import getUser from '../services/getMe'

export default store => {
  getUser()
    .then(response => {
      const { data } = response.data
      setHasLogged(true)
      const { reactions, topics, cards, deck } = data
      store.dispatch('setUser', data)
      store.dispatch('getTopics', topics)
      store.dispatch('getReactions', reactions)
      store.dispatch('getDeck', deck)
      store.dispatch('getCards', cards)
      store.dispatch('hasLogged', true)
      router.push('/dashboard')
    })
    .catch(error => {
      setToken('')
      setHasLogged(false)
      store.dispatch('hasLogged', false)
      router.push('/login')
      console.log(error)
    })
}
