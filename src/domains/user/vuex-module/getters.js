import { isEmpty } from 'lodash'

export default {
  getUser: state => state.user,
  getDeck: state => state.deck,
  getReactions: state => state.reactions,
  getCards: state => state.me_cards,
  getTopics: state => state.me_topics,
  getVotes: state => state.user.votes,
  getIsLogged: state => !isEmpty(state.token),
  getIsModerator: state => state.user.is_moderator,
  getIsAdministrator: state => state.user.administrator,
  isPushEnable: state => !isEmpty(state.user.token_device),
  getTopicsFollowed: state => state.user.topics_followed || [],
  getModeratorsFollowed: state => state.user.moderators_followed || [],
  getFollowers: state => state.user.followers || [],
  isLogged: state => !isEmpty(state.token)
}
