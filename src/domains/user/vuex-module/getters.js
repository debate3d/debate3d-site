export default {
  getUser: state => state.user,
  getDeck: state => state.deck,
  getReactions: state => state.reactions,
  getCards: state => state.cards,
  getTopics: state => state.topics,
  getVotes: state => state.user.votes,
  getIsLogged: state => state.isLogged
}
