<script>
  import * as Components from '../components'
  import UserStats from '@/domains/user/view/user-stats/main.vue'

  export default {
    name: 'app-user-common-detail',
    props: {
      user: {
        type: Object,
        default: () => ({ })
      }
    },
    components: {
      UserStats,
      ...Components
    }
  }
</script>

<template lang="html">
  <div class="user-detail">
    <div class="columns">

      <div class="column is-5">
        <user-info :user="user" />
      </div>

      <div class="column is-7">
        <user-stats :uid="user.uid" />
      </div>
    </div>

    <user-cards :user="user" />
  </div>
</template>

<style media="screen" scoped>
  .user-detail {
    padding: 20px;
  }
</style>
