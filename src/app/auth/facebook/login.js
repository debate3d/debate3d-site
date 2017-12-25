import { get } from 'lodash'
import { curry, path } from 'ramda'

import setToken from '@/services/set-token'
import setUser from '@/domains/user/services/set-user'
import loginFacebook from '@/domains/user/services/login-facebook'

import { getLastRoute, removeLastRoute, EventBus } from '@/helpers'

const setTokenMethod = token => setToken(token)

export default curry((loading, store, router, user) => {
  const finished = result => {
    loading.close()
    const isVerified = result.is_verified
    if (!isVerified) {
      router.push('/auth/finish')
      return
    }
    const lastRoute = getLastRoute()
    if (lastRoute) {
      router.push(lastRoute)
      removeLastRoute()
      EventBus.$emit('close:login:modal')
      return Promise.resolve(result)
    }
    router.push('/app/dashboard')
    return Promise.resolve(result)
  }

  const defineUser = token => setUser(store).then(finished)

  const data = {
    id: get(user, 'id'),
    name: get(user, 'name'),
    email: get(user, 'email')
  }

  return loginFacebook(data)
    .then(path(['data', 'LoginFacebook', 'token']))
    .then(setTokenMethod)
    .then(defineUser)
    .catch(console.error)
})
