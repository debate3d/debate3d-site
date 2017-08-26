import http from '../http.js'

export default (payload) => http.post('/auth/users', payload)
