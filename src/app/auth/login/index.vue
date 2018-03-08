<script>
import AuthLoginForm from './form'

export default {
  name: 'auth-login-page',
  components: { AuthLoginForm }
}
</script>

<template>
  <q-card class="auth-login bg-white">
    <q-card-main>
      <auth-login-form />
    </q-card-main>
  </q-card>
</template>

<style scoped>
  .auth-login {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    max-height: auto;
  }
</style>
