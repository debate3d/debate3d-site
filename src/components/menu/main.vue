<script type="text/javascript">
  import ListItem from './list-item.vue'
  export default {
    name: 'menu',
    components: { ListItem }
  }
</script>

<template>
  <aside class="menu">
    <p class="menu-label">
      Conheça a plataforma
    </p>

    <ul class="menu-list">
      <list-item route="/dashboard" label="Dashboard"></list-item>
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
    background-color: #3a4752;
    transition: $menu-transition;
    min-height: 100vh;
  }

  .app-dashboard {
    .menu {
      transform: translateX(-320px);
    }
  }

  .app-dashboard.is-active {
    .menu {
      transform: translateX(0);
    }
  }
</style>
