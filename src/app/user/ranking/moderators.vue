<script>
  import allUsers from '@/domains/user/services/querys/moderators.gql'
  import boxUser from '@/domains/user/view/box-user'

  import AppPagination from '@/components/pagination.vue'

  export default {
    name: 'all-users',
    components: { boxUser, AppPagination },
    data () {
      return {
        moderators: {
          count: 0,
          records: []
        },
        page: 1
      }
    },
    apollo: {
      moderators () {
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
      :total="moderators.count"
      :current.sync="page"
      :perPage="20" />

    <box-user
      v-for="(user, key) in moderators.records"
      :user="user"
      :key="key"
      :position="number + (key + 1)" />
  </div>
</template>

<style lang="css">
</style>
