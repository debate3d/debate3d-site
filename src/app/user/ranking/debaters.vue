<script>
  import allUsers from '@/domains/user/services/querys/debaters.gql'
  import boxUser from '@/domains/user/view/box-user'

  import AppPagination from '@/components/pagination.vue'

  export default {
    name: 'all-users',
    components: { boxUser, AppPagination },
    data () {
      return {
        debaters: {
          count: 0,
          records: []
        },
        page: 1
      }
    },
    apollo: {
      debaters () {
        return {
          query: allUsers,
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
      }
    }
  }
</script>

<template lang="html">
  <div>
    <app-pagination
      :total="debaters.count"
      :current.sync="page"
      :perPage="20" />

    <box-user
      v-for="(user, key) in debaters.records"
      :user="user"
      :key="key"
      :position="number + (key + 1)" />
  </div>
</template>

<style lang="css">
</style>
