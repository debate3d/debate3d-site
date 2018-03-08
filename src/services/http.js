import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.API
})

export default instance
