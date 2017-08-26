import * as TYPES from './mutations_types'

export default {
  setUser (store, obj) {
    store.commit(TYPES.SET_USER, obj)
  },
  addTheme (store, value) {
    store.commit(TYPES.ADD_THEMES, value)
  },
  addArguments (store, value) {
    store.commit(TYPES.ADD_ARGUMENTS_USER, value)
  },
  addDeck (store, value) {
    store.commit(TYPES.ADD_DECK_ARGUMENTS_USER, value)
  },
  addReactions (store, value) {
    store.commit(TYPES.ADD_REACTIONS_USER, value)
  },
  hasLogged (store, value) {
    store.commit(TYPES.HAS_LOGGED, value)
  },
  showToast (store, value) {
    store.commit(TYPES.SHOW_TOAST, value)
  }
}
