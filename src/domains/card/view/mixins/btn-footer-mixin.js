import { defaultsDeep, isEmpty } from 'lodash'
import { EventBus, setLastRoute } from '@/helpers'

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
    },
    methods: {
      $__openLoginModal () {
        return setLastRoute(this.$route.path)
          .then(() => {
            return EventBus.$emit('open:login:modal')
          })
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
      },
      isLogged () {
        return !isEmpty(this.user)
      }
    }
  }

  return defaultsDeep({ }, common, additional)
}
