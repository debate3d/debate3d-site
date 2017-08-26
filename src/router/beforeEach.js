import { isLogged } from '../helpers'

const needAuth = to => to.meta.requireAuth

export default (to, from, next) => {
  if (needAuth(to) && isLogged()) {
    next()
    return
  }
  if (to.path === '/login' || to.path === '/register') {
    next()
    return
  }
  next(false)
  return
}
