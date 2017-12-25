<script>
  import LogoLetters from '@/components/logo-letters.vue'
  import { mapGetters } from 'vuex'
  import { isEmpty } from 'lodash'
  import { setLastRoute } from '@/helpers'

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
    },
    methods: {
      login () {
        return setLastRoute(this.$route.path)
          .then(() => {
            return this.$router.push('/auth/login')
          })
      }
    }
  }
</script>

<template lang="html">
  <header class="header">
    <button class="button" v-if="!isLogged" @click="login"> Login </button>
    <logo-letters @click.native="$router.push('/app/dashboard')" />
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
