<script>
  export default {
    name: 'root'
  }
</script>

<template>
  <div id="app">
    <router-view></router-view>
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
