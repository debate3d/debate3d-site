<script>
  import loginWithFacebook from '../../../app/auth/facebook/main.vue'

  export default {
    components: {
      loginWithFacebook
    },
    data () {
      return {
        stateModalLogin: false
      }
    },
    methods: {
      open () {
        this.stateModalLogin = true
      },
      close () {
        this.stateModalLogin = false
      }
    }
  }
</script>

<template lang="html">
  <b-modal :active.sync="stateModalLogin">
    <div class="card">
      <div class="card-header">
        <div class="card-header-title">
          Ops, para esta ação você precisa estar logado :/
        </div>
      </div>
      <div class="card-content">
        <login-with-facebook />

        <div class="buttons has-addons expanded">
          <router-link class="button" to="/auth/login"> Entre com seu e-mail e senha </router-link>
          <router-link class="button" to="/auth/register"> Cadastre-se </router-link>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<style media="screen" scoped>
  .buttons {
    margin-top: 10px;
  }

  .buttons .button {
    flex-grow: 1;
  }
</style>
