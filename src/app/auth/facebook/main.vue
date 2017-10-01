<script>
  import login from './login'

  export default {
    name: 'login-with-facebook',
    data () {
      return {
        fbSignInParams: {
          scope: 'public_profile',
          return_scopes: true
        }
      }
    },
    methods: {
      onSignInSuccess (response) {
        const loading = this.$loading.open()
        const args = [
          loading,
          this.$store,
          this.$router
        ]
        window.FB.api('/me?fields=name,email,picture', login(...args))
      },
      onSignInError (error) {
        console.error(error)
      }
    }
  }
</script>

<template>
  <fb-signin-button
    class="button is-info is-fullwidth is-medium is-outlined"
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    <span class="icon">
      <i class="fa fa-facebook-official"></i>
    </span>
    <span>Login com o Facebook</span>
  </fb-signin-button>
</template>
