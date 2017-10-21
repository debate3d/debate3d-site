import { includes, reduce } from 'lodash'

const actionsReceivedDeff = {
  votesReceived: {
    icon: 'hashtag fa-2x',
    label: 'Votos em temas'
  },
  likesReceived: {
    icon: 'thumbs-up fa-2x',
    label: 'Likes'
  },
  deckReceived: {
    icon: 'star fa-2x',
    label: 'Cards em deck'
  },
  dislikesReceived: {
    icon: 'thumbs-down fa-2x',
    label: 'Dislikes'
  }
}

const actionsReceivedPath = Object.keys(actionsReceivedDeff)

const filterReceived = (acc, value, key) => {
  if (includes(actionsReceivedPath, key)) {
    acc[ key ] = {
      label: actionsReceivedDeff[ key ].label,
      icon: actionsReceivedDeff[ key ].icon,
      count: value
    }
  }
  return acc
}

export default context => reduce(context.userStats, filterReceived, { })
