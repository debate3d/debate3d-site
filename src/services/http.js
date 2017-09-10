import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.URL_BASE
})

export default instance
