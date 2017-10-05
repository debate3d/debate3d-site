<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import { isNull } from 'lodash'

  import AppUserInfo from './user-info.vue'
  import AppTopicsInfo from './topics-info.vue'
  import AppUsersInfo from './top-users.vue'

  export default {
    name: 'main-dashboard',
    components: { AppUserInfo, AppTopicsInfo, AppUsersInfo },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      })
    },
    mounted () {
      if (isNull(this.user.avatar_id)) {
        this.$snackbar.open({
          message: 'Ainda não tem um avatar?? Escolha o seu!',
          type: 'is-warning',
          position: 'is-top-left',
          duration: 10000,
          actionText: 'Escolher',
          onAction: () => {
            this.$router.push('/me/update')
          }
        })
      }
    }
  }
</script>

<template>
  <div class="app">
    <app-user-info></app-user-info>
    <hr>
    <app-topics-info></app-topics-info>
    <hr>
    <app-users-info></app-users-info>
  </div>
</template>

<style scoped lang="scss">
  hr {
    margin: 0 auto;
  }
</style>
