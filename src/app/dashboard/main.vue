<script type="text/javascript">
  import AppHeader from './header.vue'
  import AppUserInfo from './user-info.vue'

  export default {
    name: 'main-dashboard',
    components: { AppHeader, AppUserInfo }
  }
</script>

<template>
  <div class="app">
    <app-header></app-header>
    <app-user-info></app-user-info>
    <hr>
  </div>
</template>

<style scoped lang="scss">
  hr {
    margin: 0 auto;
  }
</style>
