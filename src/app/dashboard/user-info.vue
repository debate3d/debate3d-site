<script>
  import { mapGetters } from 'vuex'
  import AppAvatar from '@/components/avatar.vue'

  export default {
    name: 'dashboard-user-info',
    components: { AppAvatar },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      })
    }
  }
</script>

<template lang="html">
  <div class="user-info">
    <app-avatar :number="user.avatar_id"></app-avatar>
    <h2 class="subtitle"> {{ user.name }} </h2>
    <span class="tag is-large is-info"> {{ user.ponts }} pontos </span>
  </div>
</template>

<style lang="scss">
  @import "../../assets/sass/extend.sass";

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
      }
    }
  }
</style>
