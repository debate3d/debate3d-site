import { isLogged } from '../helpers'

const isGuarded = to => to.meta.requireAuth

export default (to, from, next) => {
  if (isGuarded(to)) {
    if (isLogged()) {
      next()
      return
    }
  }
  if (!isGuarded(to)) {
    next()
    return
  }
  next('/login')
  return
}
