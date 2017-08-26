import store from '../store'
import isMyArgument from './isMyArgument'

export default (uidArgument) => {
  if (isMyArgument(uidArgument)) return
  const deck = store.state.deck
  if (deck === undefined) return false
  if (deck[uidArgument] === undefined) return false
  return true
}
