import { schemaTopicBox } from '@/domains/topics/schemas'
import { boxTopic } from '@/domains/topics/view'
import { apolloLoadingMixin } from '@/support/mixins'

/**
 * mixin to abstract pagination
 * @param  {String} prop
 * @param  {GraphqlObject} query
 * @return {Object}
 */
export default (prop, query) => ({
  components: { boxTopic },
  mixins: [ apolloLoadingMixin(query, 'topics', {}, 'data.topics') ],
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
    },
    apolloVariables () {
      return {
        page: this.page
      }
    }
  }
})
