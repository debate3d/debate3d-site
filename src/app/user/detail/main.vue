<script>
  import { get } from 'lodash'
  import { schemaSingleUser } from '@/domains/user/schemas'
  import query from '@/domains/user/services/querys/single-user.gql'
  import CommonUserView from './user-common'
  import ModeratorUserView from './user-moderator'
  import { refreshQueryMixin, apolloLoadingMixin } from '@/support/mixins'

  const isCommonUser = user => get(user, 'is_moderator', false) === false

  export default {
    name: 'user-view',
    mixins: [
      refreshQueryMixin('user'),
      apolloLoadingMixin(query, 'user', schemaSingleUser, 'data.user')
    ],
    components: {
      CommonUserView,
      ModeratorUserView
    },
    data () {
      return {
        user: schemaSingleUser,
        isLoading: true
      }
    },
    computed: {
      hasCommonUser () {
        return !this.isLoading && isCommonUser(this.user)
      },
      apolloVariables () {
        return {
          nickname: this.$route.params.user
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="user-view">
    <common-user-view v-if="hasCommonUser" :user="user" />

    <moderator-user-view v-if="!hasCommonUser" :user="user" />
  </div>
</template>

<style lang="scss" scoped>
  .user-view {
    margin: 0 auto;
  }
</style>
