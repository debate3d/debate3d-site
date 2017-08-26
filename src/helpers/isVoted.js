import store from '../store'
import isMyArgument from './isMyArgument'

export default uidArgument => {
  if (isMyArgument(uidArgument)) return
  const votes = store.state.user.votes
  if (votes === undefined) return false
  if (votes[uidArgument] === undefined) return false
  return votes[uidArgument].position
}
