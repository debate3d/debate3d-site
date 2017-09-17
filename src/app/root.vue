<script>
import AppHeader from '../components/header.vue'
import AppMenu from '../components/menu/main.vue'
import AppButton from '../components/menu/menu-button.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppMenu,
    AppButton
  },
  data () {
    return {
      condition: false
    }
  },
  computed: {
    buttonText () {
      return (this.condition) ? 'Fechar' : 'Menu'
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
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/sass/_extend";

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
