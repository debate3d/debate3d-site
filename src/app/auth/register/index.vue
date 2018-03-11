<script>
import AuthRegisterForm from './form'

export default {
  name: 'auth-register-page',
  components: { AuthRegisterForm }
}
</script>

<template>
  <q-card class="auth-register bg-white">
    <q-card-main>
      <auth-register-form />

      <br>

      <p class="text-dark">
        Já possui cadastro?
        <router-link :to="{ name: 'auth.login' }"> Faça login </router-link>
      </p>
    </q-card-main>
  </q-card>
</template>

<style scoped>
  .auth-register {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    max-height: auto;
  }
</style>
