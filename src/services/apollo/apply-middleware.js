import { set } from 'lodash'

let token

export const setToken = value => {
  token = value
}

const applyMiddleware = (req, next) => {
  const Authorization = token ? `${token}` : null

  set(req.options, 'headers.Authorization', Authorization)

  next()
}

export default applyMiddleware
