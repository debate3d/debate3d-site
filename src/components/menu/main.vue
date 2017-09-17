<script type="text/javascript">
  import ListItem from './list-item.vue'
  import LogoLetters from '../logo-letters.vue'
  import { mapGetters } from 'vuex'
  import { isEmpty } from 'lodash'

  export default {
    name: 'menu',
    components: { ListItem, LogoLetters },
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

<template>
  <aside class="menu">
    <logo-letters></logo-letters>
    <p class="menu-label">
      Conheça a plataforma
    </p>

    <ul class="menu-list">
      <list-item route="/dashboard" label="Dashboard" />
      <list-item route="/dashboard/topics" label="Temas" />
      <list-item route="/ranking" label="Ranking de usuários" />
      <list-item route="/my-cards" label="Meus Cards" v-if="isLogged" />
      <list-item route="/my-deck" label="Meu Deck" v-if="isLogged" />
      <list-item route="/my-topics" label="Meus Temas" v-if="isLogged" />
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
  @import "../../assets/sass/extend";

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: $menu-width;
    padding: $space * 4 $space $space;
    background-color: $menu-color;
    transition: $menu-transition;
    min-height: 100vh;
    z-index: 2;

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
