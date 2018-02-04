<script type="text/javascript">
  import { mapGetters, mapActions } from 'vuex'
  import { isNull, isEmpty } from 'lodash'
  import * as Components from './components'
  import { EventBus } from '@/helpers'

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
    methods: {
      ...mapActions({
        setTokenDevice: 'setTokenDevice'
      })
    },
    watch: {
      user () {
        if (!isEmpty(this.user)) {
          this.setTokenDevice()
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
    },
    mounted () {
      EventBus.$emit('loading:toggle', false)
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
