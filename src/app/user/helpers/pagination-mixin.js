import { mapGetters } from 'vuex'
import { capitalize, isEmpty } from 'lodash'

import AppPagination from '@/components/pagination.vue'

/**
 * mixin to abstract pagination
 * @param  {String} prop
 * @param  {GraphqlObject} query
 * @return {Object}
 */
export default (prop, query) => {
  const capitalizeProp = capitalize(prop)
  const hasProp = `has${capitalizeProp}`

  return {
    components: {
      AppPagination
    },
    data () {
      return {
        user: {
          [ prop ]: {
            count: 0,
            records: []
          }
        },
        page: 1
      }
    },
    computed: {
      ...mapGetters({
        'getUser': 'getUser'
      }),
      [ prop ] () {
        return this.user[prop]
      },
      [ hasProp ] () {
        return !isEmpty(this.user[prop])
      },
      hasPagination () {
        return this[hasProp] && this.user[prop].count > 10
      }
    },
    apollo: {
      user () {
        return {
          query,
          variables () {
            const uid = this.getUser.uid || ''
            return {
              uid: uid,
              page: this.page
            }
          },
          fetchPolicy: 'network-only'
        }
      }
    }
  }
}
