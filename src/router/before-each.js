import { isLogged } from '../helpers'

const needAuth = to => to.meta.requireAuth

export default (to, from, next) => {
  if (!needAuth(to)) {
    next()
    return
  }
  if (needAuth(to) && isLogged()) {
    next()
    return
  }
  next('/auth/login')
  return
}
