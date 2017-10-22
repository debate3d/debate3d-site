<script>
  import { schemaSingleUser } from '@/domains/user/schemas'
  import { refreshQueryMixin } from '@/mixins'
  import querySingleUser from '@/domains/user/services/querys/single-user.gql'
  import * as Components from './components'

  export default {
    name: 'user-view',
    mixins: [ refreshQueryMixin('user') ],
    components: {
      ...Components
    },
    data () {
      return {
        user: schemaSingleUser
      }
    },
    apollo: {
      user () {
        return {
          query: querySingleUser,
          variables () {
            return {
              uid: this.$route.params.user
            }
          },
          fetchPolicy: 'network-only'
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="user-view">
    <user-info :user="user" />
    <user-ponts :user="user" />
    <user-cards :user="user" />
    <user-topics :user="user" />
  </div>
</template>

<style lang="scss" scoped>
  @import '../../../assets/sass/extend.sass';

  .user-view {
    max-width: 800px;
    margin: $space auto;

    .button {
      margin-bottom: 10px;
    }    
  }
</style>
