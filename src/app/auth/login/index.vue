<script>
import AuthLoginForm from './form'
import ForgetPassword from './forget-password'

export default {
  name: 'auth-login-page',
  components: { AuthLoginForm, ForgetPassword },
  methods: {
    openModal () {
      this.$refs.modal.open()
    }
  }
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

      <p class="text-dark">
        <a href="#" @click="openModal"> Reset sua senha </a>
      </p>

      <forget-password ref="modal" />
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
