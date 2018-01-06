export default {
  getUser: state => state.user,
  getDeck: state => state.deck,
  getReactions: state => state.reactions,
  getCards: state => state.me_cards,
  getTopics: state => state.me_topics,
  getVotes: state => state.user.votes,
  getIsLogged: state => state.isLogged,
  getIsModerator: state => state.user.is_moderator,
  getIsAdministrator: state => state.user.administrator
}
