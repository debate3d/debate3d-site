import { includes, reduce } from 'lodash'

const actionsMadeDeff = {
  votesGived: {
    icon: 'hashtag fa-2x',
    label: 'Votos em temas'
  },
  reactionsGived: {
    icon: 'thumbs-up fa-2x',
    label: 'Reações'
  },
  deckGived: {
    icon: 'star fa-2x',
    label: 'Cards no deck'
  },
  cardsCreated: {
    icon: 'star fa-2x',
    label: 'Cards criados'
  },
  topicsCreated: {
    icon: 'star fa-2x',
    label: 'Temas criados'
  }
}

const actionsMadePath = Object.keys(actionsMadeDeff)

const filterMade = (acc, value, key) => {
  if (includes(actionsMadePath, key)) {
    acc[ key ] = {
      label: actionsMadeDeff[ key ].label,
      icon: actionsMadeDeff[ key ].icon,
      count: value
    }
  }
  return acc
}

export default context => reduce(context.userStats, filterMade, { })
