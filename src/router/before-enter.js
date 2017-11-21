import { isLogged } from '../helpers'

const isGuarded = to => to.meta.requireAuth

export default (to, from, next) => {
  window.scrollTo(0, 0)
  if (isLogged()) {
    next()
    return
  }
  console.log(from.path)
  if (!isGuarded(to)) {
    next()
    return
  }
  next('/auth/login')
  return
}
