<script>
  import LogoLetters from '@/components/logo-letters.vue'
  import { mapGetters } from 'vuex'
  import { isEmpty } from 'lodash'

  export default {
    name: 'dashboard-main-header',
    components: { LogoLetters },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      isLogged () {
        return !isEmpty(this.user)
      }
    }
  }
</script>

<template lang="html">
  <header class="header">
    <logo-letters @click.native="$router.push('/dashboard')" />
    <router-link
      v-if="!isLogged"
      to="/auth/login"
      tag="button"
      class="button"> Login </router-link>
  </header>
</template>

<style lang="scss" scoped>
  @import "../../assets/sass/_extend";

  .header {
    background-color: $menu-color;
    padding: $space;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .image {
      max-width: 150px;
      cursor: pointer;
    }

    .button {
      margin-left: $space;
    }
  }
</style>
