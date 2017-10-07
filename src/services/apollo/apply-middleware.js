import { set } from 'lodash'
import NProgress from 'nprogress'

let token

export const setToken = value => {
  token = value
}

const applyMiddleware = (req, next) => {
  NProgress.start()
  const Authorization = token ? `${token}` : null

  set(req.options, 'headers.Authorization', Authorization)

  next()
}

export default applyMiddleware
