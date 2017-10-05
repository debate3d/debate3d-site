import { get } from 'lodash'
import { curry, path } from 'ramda'

import setToken from '@/services/set-token'
import setUser from '@/domains/user/services/set-user'
import loginFacebook from '@/domains/user/services/login-facebook'

const setTokenMethod = token => setToken(token)

export default curry((loading, store, router, user) => {
  const finished = result => {
    loading.close()
    router.push('/dashboard')
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
