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
        update: result => get(result, path),
        result (apolloResult) {
          const result = get(apolloResult, path, defaultValue)
          this[apolloKey] = result
          this.emitCloseLoading()
          this.isLoading = false
          if (isFunction(fn)) {
            fn(this, result)
          }
        },
        variables () {
          return this.apolloVariables
        },
        error (err) {
          this.emitCloseLoading()
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
  methods: {
    emitCloseLoading () {
      setTimeout(() => {
        EventBus.$emit('loading:toggle', false)
      }, 200)
    }
  },
  created () {
    EventBus.$emit('loading:toggle', true)
  },
  beforeRouteEnter (to, from, next) {
    EventBus.$emit('loading:toggle', true)
    if (from.name) {
      return setTimeout(() => {
        next()
      }, 600)
    }
    next()
  }
})
