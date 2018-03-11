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
      <br>
      <p class="text-dark">
        Ainda não possuem uma conta?
        <router-link :to="{ name: 'auth.register' }"> Faça seu cadastro </router-link>
      </p>
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
