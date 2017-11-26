<script>
  import { mapGetters } from 'vuex'

  import AppAvatar from '@/components/avatar.vue'
  import UserStats from '@/domains/user/view/user-stats/main.vue'

  export default {
    name: 'dashboard-user-info',
    data () {
      return {
        modalActive: false
      }
    },
    components: { AppAvatar, UserStats },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      })
    },
    methods: {
      openStats () {
        this.modalActive = true
      }
    }
  }
</script>

<template lang="html">
  <div class="user-info">
    <app-avatar :number="user.avatar_id"></app-avatar>
    <router-link
      class="subtitle" :to="`/user/${user.nickname}/detail`">
      {{ user.name }} </router-link>
    <span
      class="tag is-large is-info"
      @click="openStats"> {{ user.ponts }} pontos </span>

    <b-modal :active.sync="modalActive">
      <user-stats :uid="user.uid"/>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/sass/extend.sass";

  .user-info {
    position: relative;

    @media (max-width: 520px) {
      .avatar {
        margin: $space - 5px 0 $space - 5px $space - 5px;
      }

      .subtitle {
        margin-left: $space - 5px;
      }

      .tag {
        position: absolute;
        top: $space + 5px;
        right: $space - 5px;
      }
    }

    @media (min-width: 521px) {
      height: 80px;

      .avatar {
        position: absolute;
        top: $space - 5px;
        left: $space - 5px;
      }

      .subtitle {
        position: absolute;
        top: $space + 10px;
        left: 80px;
      }

      .tag {
        position: absolute;
        top: $space - 5px;
        right: $space - 5px;
        cursor: pointer;
      }
    }
  }
</style>
