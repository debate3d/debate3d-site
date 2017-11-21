import { isEmpty } from 'lodash'

export default () => {
  return !isEmpty(JSON.parse(window.localStorage.getItem('token')))
}
