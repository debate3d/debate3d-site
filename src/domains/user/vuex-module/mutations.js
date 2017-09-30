import * as TYPES from './mutation-types'

export default {
  [ TYPES.SET_USER ] (store, obj) {
    store.user = obj
  },
  [ TYPES.GET_TOPICS ] (store, obj) {
    store.topics = obj
  },
  [ TYPES.GET_CARDS_USER ] (store, obj) {
    store.cards = obj
  },
  [ TYPES.GET_DECK_CARDS_USER ] (store, obj) {
    store.deck = obj
  },
  [ TYPES.GET_REACTIONS_USER ] (store, obj) {
    store.reactions = obj
  },
  [ TYPES.GET_VOTES_USER ] (store, obj) {
    store.reactions = obj
  },
  [ TYPES.IS_LOGGED ] (store, state) {
    store.hasLogged = state
  }
}
