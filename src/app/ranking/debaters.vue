<script>
  import allUsers from '@/domains/user/services/querys/debaters.gql'
  import boxUser from '@/domains/user/view/box-user'

  export default {
    name: 'all-users',
    components: { boxUser },
    data () {
      return {
        debaters: {
          count: 0,
          records: []
        }
      }
    },
    apollo: {
      debaters () {
        return {
          query: allUsers,
          variables () {
            return {
              page: 1
            }
          }
        }
      }
    }
  }
</script>

<template lang="html">
  <div>
    <box-user
      v-for="(user, key) in debaters.records"
      :user="user"
      :key="key"
      :position="key + 1" />
  </div>
</template>

<style lang="css">
</style>
