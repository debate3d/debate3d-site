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
    [apolloKey]: defaultValue
  }),
  apollo: {
    [apolloKey] () {
      return {
        query,
        result (apolloResult) {
          const result = get(apolloResult, path, defaultValue)
          this[apolloKey] = result
          EventBus.$emit('loading:toggle', false)
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
