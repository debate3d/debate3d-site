<script>
  import AppHeader from './header.vue'
  import AppMenu from './menu/main.vue'
  import AppButton from './menu/menu-button.vue'
  import Copyright from './copyright.vue'

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppMenu,
      AppButton,
      Copyright
    },
    data () {
      return {
        condition: false
      }
    },
    computed: {
      buttonText () {
        return this.condition ? 'Fechar' : 'Menu'
      }
    },
    methods: {
      toogleMenu () {
        this.condition = arguments[0]
        this.$refs.container.classList.toggle('is-active')
      }
    }
  }
</script>

<template>
  <div class="app-dashboard" ref="container">
    <app-menu></app-menu>
    <app-button @toogleMenu="toogleMenu" :text="buttonText"></app-button>
    <main>
      <app-header></app-header>
      <router-view></router-view>
    </main>
    <copyright />
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/sass/_extend";

  // Dashboard container
  .app-dashboard {
    min-height: 100vh;
    background-color: #f1f1f1;

    main {
      min-height: 100vh;
      transition: $menu-transition;
    }
  }
</style>
