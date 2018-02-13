<script>
  import { mapGetters } from 'vuex'
  import query from '@/domains/user/services/querys/moderators-followed.gql'
  import RenderUsers from '@/components/render-users/main'
  import { apolloLoadingMixin } from '@/support/mixins'

  export default {
    name: 'my-moderators-followeds',
    mixins: [
      apolloLoadingMixin(query, 'moderatorsFollowed', [], 'data.user.moderators_followed')
    ],
    components: { RenderUsers },
    computed: {
      ...mapGetters({
        user: 'getUser'
      }),
      apolloVariables () {
        const uid = this.user.uid || ''

        return {
          uid
        }
      },
      moderators () {
        const records = this.moderatorsFollowed.map(moderator => moderator.moderator || {})
        return {
          count: 1,
          records
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="my-moderators-followeds">
    <h1 class="title has-text-centered"> Moderadores que estou seguindo </h1>
    <render-users
      :users="moderators"
      successMessage=""
      column="is-4"/>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .my-moderators-followeds {
    padding: $space;
  }
</style>
