<script type="text/javascript">
  import { isEmpty } from 'lodash'
  import { mapGetters } from 'vuex'

  import ListItem from './list-item.vue'
  import LogoLetters from '@/components/logo-letters.vue'
  import menu from './menu'
  import { logout } from '@/services/auth'

  export default {
    name: 'menu',
    components: { ListItem, LogoLetters },
    data () {
      return {
        menu
      }
    },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      isLogged () {
        return !isEmpty(this.user)
      },
      isSubscriber () {
        return this.user.subscriber
      },
      isAdministrator () {
        return this.user.administrator
      }
    },
    methods: {
      logout
    }
  }
</script>

<template>
  <aside class="menu">
    <logo-letters></logo-letters>

    <ul class="menu-list">
      <list-item
        v-for="item in menu"
        :key="item.key"
        :route="item.route"
        :label="item.label"
        v-if="item.needAuth(isLogged, isSubscriber, isAdministrator)"
        @remove-class-menu="$emit('remove-class-menu')" />

    <button class="button" @click="logout"> Sair </button>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
  @import "../../../assets/sass/extend.sass";

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: $menu-width;
    padding: $space * 4 $space $space;
    background-color: $menu-color;
    transition: $menu-transition;
    min-height: 100vh;
    z-index: 5;

    &:after {
      background-color: rgba($menu-color, 0.4);
      position: absolute;
      left: 320px;
      top: 0;
      content: '';
      width: 100vw;
      height: 100%;
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.2s ease;
    }

    .image.logo-letters {
      max-width: 150px;
      display: block;
      margin: 0 auto $space auto;
    }
  }

  .app-dashboard {
    .menu {
      transform: translateX(-320px);
    }
  }

  .app-dashboard.is-active {
    .menu {
      transform: translateX(0);

      &:after {
        opacity: 1;
        visibility: visible;
      }
    }
  }
</style>
