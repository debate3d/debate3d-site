import { EventBus } from '@/helpers'
import { isEmpty } from 'lodash'

/**
 * mixin for refresh apollo querys
 * @param  {String} keyApollo
 * @return {Object}
 */
export default keyApollo => ({
  methods: {
    refreshQuery () {
      if (!isEmpty(this.$apollo.queries)) {
        this.$apollo.queries[keyApollo].refetch()
      }
    }
  },
  mounted () {
    EventBus.$on('refresh:apollo', payload => {
      this.refreshQuery()
    })
  }
})
