<script>
  import AppHeader from './header.vue'
  import AppMenu from './menu/main.vue'
  import AppButton from './menu/menu-button.vue'
  import AppFooter from './footer.vue'
  import Copyright from './copyright.vue'

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppMenu,
      AppButton,
      AppFooter,
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
      },
      removeClassMenu () {
        this.condition = false
        this.$refs.container.classList.remove('is-active')
      }
    }
  }
</script>

<template>
  <div class="app-dashboard" ref="container">
    <app-menu @remove-class-menu="removeClassMenu"/>
    <app-button @toogleMenu="toogleMenu" :text="buttonText"></app-button>
    <main>
      <app-header />
      <router-view></router-view>
    </main>
    <app-footer />
    <copyright />
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/sass/_extend";

  // Dashboard container
  .app-dashboard {
    min-height: 100vh;
    background-color: #f1f1f1;
    // background: url('../../../static/bg-site.jpg');

    main {
      min-height: 100vh;
      transition: $menu-transition;
    }
  }
</style>
