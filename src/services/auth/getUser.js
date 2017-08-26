import http from '../http'

export default (token) => http.get('/auth/me', {
  headers: {
    'Authorization': token
  }
})
