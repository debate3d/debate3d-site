import { get, isFunction } from 'lodash'
import { EventBus } from '@/helpers'

/**
 * @method apolloLoadingMixin
 * @param  {ApolloQuery}   query
 * @param  {String}        apolloKey
 * @param  {Any}           defaultValue
 * @param  {String}        path
 * @param  {Function}      fn
 * @return {VueMixin}
 */
export default (query, apolloKey, defaultValue, path, fn) => ({
  data: () => ({
    [apolloKey]: defaultValue,
    isLoading: true
  }),
  apollo: {
    [apolloKey] () {
      return {
        query,
        result (apolloResult) {
          const result = get(apolloResult, path, defaultValue)
          this[apolloKey] = result
          EventBus.$emit('loading:toggle', false)
          this.isLoading = false
          if (isFunction(fn)) {
            fn(this, result)
          }
        },
        variables () {
          return this.apolloVariables
        },
        error (err) {
          EventBus.$emit('loading:toggle', false)
          EventBus.$emit('loading:set-message', err.message)
          this.isLoading = false
          this.$snackbar.open({
            title: 'Houve um problema no carregamento dos dados',
            type: 'is-danger'
          })
        },
        fetchPolicy: 'network-only'
      }
    }
  },
  beforeRouteEnter (to, from, next) {
    EventBus.$emit('loading:toggle', true)
    next()
  }
})
