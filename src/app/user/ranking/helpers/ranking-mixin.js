import boxUser from '@/domains/user/view/box-user'
import AppPagination from '@/components/pagination.vue'
import { loadingMixin } from '../../../../mixins'

export default (key, name, query) => ({
  name,
  components: { boxUser, AppPagination },
  mixins: [ loadingMixin(key) ],
  data () {
    return {
      [ key ]: {
        count: 0,
        records: []
      },
      page: 1
    }
  },
  apollo: {
    [ key ] () {
      return {
        query,
        variables () {
          return {
            page: this.page
          }
        }
      }
    }
  },
  computed: {
    number () {
      return this.page === 1 ? 0 : (this.page - 1) * 20
    },
    records () {
      return this[ key ].records
    },
    count () {
      return this[ key ].count
    }
  }
})
