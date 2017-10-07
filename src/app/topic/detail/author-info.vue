<script>
  import AppAvatar from '@/components/avatar.vue'
  import SharedList from '@/domains/user/view/shared-list'

  export default {
    components: { AppAvatar, SharedList },
    props: {
      author: Object
    }
  }
</script>

<template lang="html">
  <div class="card">
    <div class="card-header">
      <router-link class="card-header-title" :to="`/user/${author.uid}/detail`">
        {{ author.name }}
      </router-link>
    </div>
    <div class="card-content">
      <app-avatar
        :number="author.avatar_id"
        :length="100"></app-avatar>
      <div class="content has-text-centered">
        Email: {{ author.email }}
      </div>
      <shared-list :user="author"/>
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
