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
    <router-link
      v-if="!isLogged"
      to="/auth/login"
      tag="button"
      class="button"> Login </router-link>
    <logo-letters @click.native="$router.push('/dashboard')" />
  </header>
</template>

<style lang="scss" scoped>
  @import "../../../assets/sass/_extend";

  .header {
    background-color: $menu-color;
    padding: $space;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 0 6px 6px -3px rgba(0,0,0,.2),
                0 10px 14px 1px rgba(0,0,0,.14),
                0 4px 18px 3px rgba(0,0,0,.12);

    .image {
      max-width: 150px;
      cursor: pointer;
    }

    .button {
      margin-right: $space;
      background-color: #ff7c24;
      border-color: #ff7c24;
      color: $white;
    }
  }
</style>
