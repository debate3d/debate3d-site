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
  <div class="card">
    <div class="card-content">
      <app-avatar
        :number="user.avatar_id"
        :length="100"></app-avatar>

      <h1 class="title has-text-centered"> {{ user.name }} </h1>

      <p class="subtitle has-text-centered"> Email: {{ user.email }} </p>
      <p class="subtitle has-text-centered user-ponts"> Pontos: {{ user.ponts }} </p>

      <shared-list :user="user" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../../../assets/sass/extend.sass';

  .title + .subtitle {
    margin-top: 0;
  }

  .avatar {
    margin: 0 auto 10px auto;
    display: block;
  }

  .user-ponts {
    margin-bottom: 0;
  }
</style>
