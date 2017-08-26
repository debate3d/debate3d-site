import store from '../store'

export default uidArgument => {
  if (store.state.arguments[uidArgument] === undefined) return false
  return true
}
