import http from '../http'

export default uid => http.get(`/users/${uid}/reactions`)
