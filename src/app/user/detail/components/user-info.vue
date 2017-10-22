<script>
  import mixin from './mixin'
  import AppAvatar from '@/components/avatar.vue'
  import SharedList from '@/domains/user/view/shared-list'

  export default {
    mixins: [ mixin('user-detail-info') ],
    components: {
      AppAvatar,
      SharedList
    }
  }
</script>

<template>
  <div class="user-view__header">
    <app-avatar
      :number="user.avatar_id"
      :length="100"></app-avatar>
    <h1 class="title has-text-centered"> {{ user.name }} </h1>
    <p class="subtitle has-text-centered"> Email: {{ user.email }} </p>
    <p class="subtitle has-text-centered"> Pontos: {{ user.ponts }} </p>
    <p class="subtitle has-text-centered"> Membro desde {{ user.created }} </p>
    <shared-list :user="user" />
  </div>
</template>

<style lang="scss" scoped>
  @import '../../../../assets/sass/extend.sass';

  .title + .subtitle {
    margin-top: 0;
  }

  .avatar {
    margin: 0 auto;
    display: block;
  }

  .user-view__header {
    padding: 0 0 1em 0;

    .subtitle:first-child {
      margin-top: $space;
    }

    .subtitle:last-child {
      font-weight: 500;
    }
  }
</style>
