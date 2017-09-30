import getHasLogged from './get-has-logged'

export default () => {
  if (getHasLogged()) return true
  return false
}
