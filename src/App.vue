<script>
  import { loginMixin } from './support/mixins'

  export default {
    name: 'root',
    mixins: [ loginMixin ]
  }
</script>

<template>
  <div id="app">
    <router-view></router-view>

    <!-- Modal when user is not logged -->
    <modal-form-login ref="modalFormLogin" />
  </div>
</template>

<style lang="scss">
  @import "./assets/sass/_bulma-connector";

  body.login,
  body.register {
    background-color: $color4;

    #app {
      padding: 0;
    }
  }
</style>
