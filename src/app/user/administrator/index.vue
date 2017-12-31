<script>
  import * as Components from './components'

  export default {
    name: 'manager-users',
    components: {
      ...Components
    },
    data: () => ({
      userChoose: [ ]
    })
  }
</script>

<template>
  <div class="manager-users">
    <h1 class="title has-text-centered"> Gerencie usuários </h1>
    <h2 class="subtitle has-text-centered"> Tornar usuarios assinantes </h2>

    <hr>

    <div class="columns is-centered">

      <show-users :user-choose="userChoose" />

      <all-users @user-choose="users => userChoose = users" />

    </div>
  </div>
</template>

<style lang="scss" scoped>
  .manager-users {
    padding: 20px;
  }
</style>
