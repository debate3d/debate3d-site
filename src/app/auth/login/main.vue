<script>
import { isEmpty } from 'lodash'

import LogoGlasses from '@/components/logo-glasses.vue'
import login from './login'
import loginWithFacebook from '../facebook/main.vue'

export default {
  components: { LogoGlasses, loginWithFacebook },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isValid () {
      return !isEmpty(this.email) && !isEmpty(this.password)
    }
  },
  methods: {
    login () {
      if (this.isValid) {
        const loading = this.$loading.open()
        const email = this.email
        const password = this.password
        const payload = {
          email,
          password
        }
        login(this, payload, loading)
      }
    }
  },
  mounted () {
    const body = document.body
    body.classList.add('login')
  },
  beforeDestroy () {
    const body = document.body
    body.classList.remove('login')
  }
}
</script>

<template>
  <div class="container">
    <logo-glasses />
    <section class="form-section">
      <h1 class="title is-3 has-text-centered"> Login </h1>

      <login-with-facebook />

      <hr>
      <form @submit.prevent="login">
        <b-field>
          <b-input
            placeholder="Email"
            icon="envelope"
            size="is-medium"
            type="text"
            ref="inputEmail"
            v-model="email"></b-input>
        </b-field>

        <b-field>
          <b-input
            placeholder="Senha"
            icon="key"
            size="is-medium"
            type="password"
            v-model="password"></b-input>
        </b-field>

        <button
          class="button is-success is-medium is-outlined is-fullwidth"
          :disabled="!isValid">
          Entrar </button>
      </form>

      <p> Não possui uma conta? <router-link to="/auth/register"> Cadastre-se </router-link> </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/sass/extend.sass";

  .container {
    padding-top: $space * 2;

    .image {
      max-width: 150px;
      margin: $space auto;
    }
  }

  .form-section {
    max-width: 450px;
    margin: 0 auto;
    padding: $space;
    background-color: $white;
    border-radius: 2px;
    box-shadow: 0px 0px 6px 0px #363636;
  }

  form {
    margin: $space / 2 0;
  }
</style>
