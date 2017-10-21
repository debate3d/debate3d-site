import { schemaTopicBox } from '@/domains/topics/schemas'
import { boxTopic } from '@/domains/topics/view'

/**
 * mixin to abstract pagination
 * @param  {String} prop
 * @param  {GraphqlObject} query
 * @return {Object}
 */
export default (prop, query) => ({
  components: { boxTopic },
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      topics: {
        mostCards: [ schemaTopicBox ]
      }
    }
  },
  computed: {
    allTopics () {
      return this.topics[prop]
    }
  },
  apollo: {
    topics () {
      return {
        query,
        variables () {
          return {
            page: this.page
          }
        },
        fetchPolicy: 'network-only'
      }
    }
  }
})
