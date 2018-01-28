import boxUser from '@/domains/user/view/box-user'
import AppPagination from '@/components/pagination.vue'
import { apolloLoadingMixin } from '@/support/mixins'

const deff = {
  count: 0,
  records: []
}

export default (key, name, query, path) => ({
  name,
  components: { boxUser, AppPagination },
  mixins: [
    apolloLoadingMixin(query, key, deff, path)
  ],
  data: () => ({
    page: 1
  }),
  computed: {
    number () {
      return this.page === 1 ? 0 : (this.page - 1) * 20
    },
    records () {
      return this[ key ].records
    },
    count () {
      return this[ key ].count
    },
    apolloVariables () {
      return {
        page: this.page || 1
      }
    }
  }
})
