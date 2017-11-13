import axios from 'axios'
import config from '../config'

export default file => {
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', config.CLOUDNARY_UPLOAD_PRESET)

  const sendConfig = {
    url: config.CLOUDNARY_URL,
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    data: formData
  }

  return axios(sendConfig)
}
