<script>
  import * as Components from './components'
  import OfflineAlert from '@/support/mixins/offline-alert'

  export default {
    name: 'app',
    mixins: [ OfflineAlert ],
    components: { ...Components },
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
    <div class="notification offline is-warning" v-if="!online">
      Ops, você está sem conexão
    </div>
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

  .app-dashboard {
    min-height: 100vh;
    background-color: #f1f1f1;

    main {
      min-height: 100vh;
      transition: $menu-transition;
    }
  }
</style>
