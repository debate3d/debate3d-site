<script type="text/javascript">
  import AppUserInfo from './user-info.vue'
  import AppTopicsInfo from './topics-info.vue'
  import AppUsersInfo from './top-users.vue'

  export default {
    name: 'main-dashboard',
    components: { AppUserInfo, AppTopicsInfo, AppUsersInfo }
  }
</script>

<template>
  <div class="app">
    <app-user-info></app-user-info>
    <hr>
    <app-topics-info></app-topics-info>
    <hr>
    <app-users-info></app-users-info>
  </div>
</template>

<style scoped lang="scss">
  hr {
    margin: 0 auto;
  }
</style>
