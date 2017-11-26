<script type="text/javascript">
  import { mapGetters } from 'vuex'
  import { isNull, isEmpty } from 'lodash'
  import * as Components from './components'

  export default {
    name: 'main-dashboard',
    components: { ...Components },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      isVerified () {
        return this.user.is_verified
      }
    },
    watch: {
      user () {
        if (!isEmpty(this.user)) {
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

          if (!this.isVerified) {
            this.$snackbar.open({
              message: 'Termine seu cadastro em nossa plataforma',
              type: 'is-warning',
              position: 'is-bottom-left',
              duration: 10000,
              actionText: 'Ok',
              onAction: () => {
                this.$router.push('/auth/finish')
              }
            })
          }
        }
      }
    }
  }
</script>

<template>
  <div class="app">
    <user-info></user-info>
    <hr>
    <topics-info></topics-info>
    <hr>
    <top-users></top-users>
  </div>
</template>

<style scoped lang="scss">
  hr {
    margin: 0 auto;
  }
</style>
