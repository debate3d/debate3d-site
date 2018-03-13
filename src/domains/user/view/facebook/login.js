import { get } from 'lodash'
import { curry, path } from 'ramda'

import setToken from '@/services/set-token'
import setUser from '@/domains/user/services/set-user'
import loginFacebook from '@/domains/user/services/login-facebook'

import { EventBus } from '@/support/helpers'

const setTokenMethod = token => setToken(token)

export default curry((store, router, context, user) => {
  const finished = result => {
    context.$q.loading.show()
    EventBus.$emit('close:login:modal')
    router.push({ name: 'dashboard' })
    return context.$q.notify({
      message: 'Você está logado',
      type: 'positive'
    })
  }

  const defineUser = token => setUser(store)

  const data = {
    id: get(user, 'id'),
    name: get(user, 'name'),
    email: get(user, 'email')
  }

  return loginFacebook(data)
    .then(path(['data', 'LoginFacebook', 'token']))
    .then(setTokenMethod)
    .then(defineUser)
    .then(finished)
    .catch(err => {
      console.error(err)
      context.$q.notify({
        message: 'Não foi possível se logar',
        type: 'negative'
      })
    })
    .then(() => {
      context.$q.loading.hide()
    })
})
