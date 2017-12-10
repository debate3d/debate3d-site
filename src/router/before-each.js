import { isLogged } from '../helpers'

const needAuth = to => to.meta.requireAuth

export default (to, from, next) => {
  window.scrollTo(0, 0)
  if (needAuth(to) && isLogged()) {
    return next()
  }

  if (!needAuth(to)) {
    return next()
  }

  next('/auth/login')
}
