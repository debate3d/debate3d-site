<script>
  import AppAvatar from '@/components/avatar.vue'

  export default {
    components: { AppAvatar },
    props: {
      author: Object
    }
  }
</script>

<template lang="html">
  <div class="card">
    <div class="card-header">
      <p class="card-header-title"> {{ author.name }} </p>
    </div>
    <div class="card-content">
      <app-avatar
        :number="author.avatar_id"
        :length="100"></app-avatar>
      <div class="content has-text-centered">
        Email: {{ author.email }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card {
    .card-header-title {
      justify-content: center;
    }

    .avatar {
      display: block;
      margin: 0 auto;
    }
  }
</style>
