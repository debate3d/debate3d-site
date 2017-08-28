import { isLogged } from '../helpers'

export default (to, from, next) => {
  if (isLogged()) {
    next()
    return
  }
  next('/login')
  return
}
