// A forma como está sendo feita o import dos arquivo foi devido a um erro de
// import em que não consegui solucionar
import setHasLogged from '../../helpers/setHasLogged.js'
import setUserStorage from '../../helpers/setUserStorage.js'
import getToken from '../../helpers/getToken.js'
import setToken from '../../helpers/setToken.js'
import getUser from '../../services/auth/getUser.js'
import getReactions from '../../services/users/get-reactions.js'
import getDeck from '../../services/users/get-deck.js'
import { isEmpty } from 'lodash'
import router from '../../router'

export default store => {
  const token = getToken()
  if (isEmpty(token)) return null
  getUser(token)
    .then(response => {
      const { data } = response.data
      setUserStorage(data)
      setHasLogged(true)
      store.dispatch('setUser', data)
      const uid = data.uid
      const reactions = getReactions(uid)
      const deck = getDeck(uid)
      Promise.all([ reactions, deck ])
        .then(rows => {
          store.dispatch('addReactions', rows[0].data.data)
          store.dispatch('addDeck', rows[1].data.data)
          router.push('/dashboard')
        })
    })
    .catch(error => {
      setToken('')
      setUserStorage('')
      setHasLogged(false)
      router.push('/dashboard')
      console.log(error)
    })
}
