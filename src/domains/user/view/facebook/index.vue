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
      const args = [
        this.$store,
        this.$router,
        this
      ]
      window.FB.api('/me?fields=name,email,picture', login(...args))
    },
    onSignInError (error) {
      console.error(error)
      this.$q.notify({
        message: 'Não foi possível se logar',
        type: 'negative'
      })
    }
  }
}
</script>

<template>
  <fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError">
    <q-btn
      color="primary"
      class="full-width"
      label="Login com o Facebook" />
  </fb-signin-button>
</template>
