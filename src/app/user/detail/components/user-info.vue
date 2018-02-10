<script>
  import mixin from './mixin'
  import { mapGetters } from 'vuex'
  import AppAvatar from '@/components/avatar.vue'
  import SharedList from '@/domains/user/view/shared-list'
  import FollowButton from '@/domains/user/view/follow-button'

  export default {
    mixins: [ mixin('user-detail-info') ],
    components: {
      AppAvatar,
      SharedList,
      FollowButton
    },
    computed: {
      ...mapGetters({
        ownUser: 'getUser'
      }),
      isOwnUser () {
        return this.user.uid === this.ownUser.uid
      }
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

      <div class="columns is-centered" v-if="isModerator && !isOwnUser">
        <follow-button :moderator="user" class="column" />
      </div>

      <shared-list :user="user" />
    </div>
  </div>
</template>

<style scoped>
  .card >>> .follow-user-buttom {
    margin-top: 10px;
  }

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
