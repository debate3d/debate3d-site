import { defaultsDeep } from 'lodash'

export default (key, keyLentgh, conditionalKey) => {
  const common = {
    computed: {
      [key] () {
        return this.card[key]
      },
      [keyLentgh] () {
        return this[key].length
      },
      isMyCard () {
        const { uid } = this.user
        return this.card.author.uid === uid
      }
    }
  }

  if (key === 'deck') {
    const additional = {
      computed: {
        acted () {
          const { uid } = this.user
          return this[key].some(item => item.user.uid === uid)
        }
      }
    }
    return defaultsDeep({ }, common, additional)
  }

  const additional = {
    computed: {
      acted () {
        const { uid } = this.user
        return this.reactions.some(reaction => reaction.user.uid === uid)
      },
      reactions () {
        return this.card['likes'].concat(this.card['dislikes'])
      },
      reaction () {
        const { uid } = this.user
        return this.reactions.filter(reaction => reaction.user.uid === uid)[0]
      }
    }
  }

  return defaultsDeep({ }, common, additional)
}
