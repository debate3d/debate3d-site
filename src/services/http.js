import axios from 'axios'

const instance = axios.create({
  // Discover a way to change url base
  // baseURL: 'https://shrouded-sea-13084.herokuapp.com/' // production enviroment
  baseURL: 'http://localhost:3000/'
})

export default instance
