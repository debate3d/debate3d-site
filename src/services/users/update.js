import http from '../http'

export default (uid, payload, token) => http.patch(`/users/${uid}`, payload, {
  headers: {
    'Authorization': token
  }
})
