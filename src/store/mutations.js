import * as TYPES from './mutations_types'

export default {
  [ TYPES.SET_USER ] (store, obj) {
    store.user = obj
  },
  [ TYPES.ADD_THEMES ] (store, obj) {
    store.themes = obj
  },
  [ TYPES.ADD_ARGUMENTS_USER ] (store, obj) {
    store.arguments = obj
  },
  [ TYPES.ADD_DECK_ARGUMENTS_USER ] (store, obj) {
    store.deck = obj
  },
  [ TYPES.ADD_REACTIONS_USER ] (store, obj) {
    store.reactions = obj
  },
  [ TYPES.HAS_LOGGED ] (store, state) {
    store.hasLogged = state
  },
  [ TYPES.SHOW_TOAST ] (store, state) {
    store.toast = state
  }
}
