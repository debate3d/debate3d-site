<script>
  import { EventBus } from '@/helpers'

  export default {
    name: 'app-loading',
    data: () => ({
      message: 'Carregando dados...',
      isActive: false
    }),
    methods: {
      close () {
        this.isActive = false
      },
      toggleHTMLClass () {
        // TODO: implement logic
        // document.documentElement.classList.toggle('is-loading')
      },
      onLoadingToggle (bool) {
        this.isActive = bool
      },
      onLoadingSetMessage (message) {
        this.message = message
      }
    },
    created () {
      this.toggleHTMLClass()

      EventBus.$on('loading:toggle', this.onLoadingToggle)

      EventBus.$on('loading:set-message', this.onLoadingSetMessage)
    }
  }
</script>

<template lang="html">
  <transition name="loading">
    <div class="app-loading" v-if="isActive">
      <div>
        <figure class="image">
          <img src="../../assets/img/eyeglasses-d3d.png" alt="logo Debate3D">
        </figure>

        <h1 class="title"> {{ message }} </h1>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
  @import "../../assets/sass/_extend";

  .app-loading {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;
    z-index: 8;
    background-color: $menu-color;
    padding: $space;
    display: flex;
    justify-content: center;
    align-items: center;

    .image {
      max-width: 400px;
      display: block;
      margin: 0 auto;
    }

    .title {
      margin-top: $space;
      color: $turquoise;
    }
  }

  .loading-enter-active, .loading-leave-active {
    transition: opacity .5s;
  }
  .loading-enter, .loading-leave-to {
    opacity: 0;
  }
</style>
