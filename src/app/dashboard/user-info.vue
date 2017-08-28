<script>
  import { mapGetters } from 'vuex'
  import AppAvatar from '../../components/avatar.vue'

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
    <div>
      <app-avatar :url="user.url_photo" :name="user.name" length="is-small"></app-avatar>
    </div>
    <div>
      <span class="tag is-large is-info"> {{ user.ponts }} pontos </span>
    </div>
  </div>
</template>

<style lang="scss">
  @import "../../assets/sass/_extend";

  .user-info {
    display: flex;

    div {
      flex-grow: 1;
    }

    .avatar {
      margin: $space - 5px 0 $space / 2 $space;
    }

    .tag {
      margin: $space - 5px $space / 2 auto;
    }
  }
</style>
