import { EventBus } from '@/helpers'
import { isEmpty } from 'lodash'

/**
 * mixin for refresh apollo querys
 * @param  {String} keyApollo
 * @return {Object}
 */
export default keyApollo => ({
  data: () => ({
    $__loading: { }
  }),
  methods: {
    refreshQuery () {
      if (!isEmpty(this.$apollo.queries)) {
        this.$apollo.queries[ keyApollo ].refetch()
      }
    }
  },
  watch: {
    [ keyApollo ] () {
      this.$__loading.close()
    }
  },
  mounted () {
    EventBus.$on('refresh:apollo', payload => {
      this.refreshQuery()
    })
    this.$__loading = this.$loading.open()
  }
})
