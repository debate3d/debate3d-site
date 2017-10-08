<script type="text/javascript">
  export default {
    name: 'menu-button',
    props: {
      text: String
    },
    computed: {
      condition () {
        return this.text === 'Fechar'
      }
    },
    methods: {
      toogleMenu () {
        this.$emit('toogleMenu', !this.condition)
      }
    }
  }
</script>

<template>
  <button class="button" @click="toogleMenu">
    {{ text }}
  </button>
</template>

<style lang="scss" media="screen" scoped>
  @import "../../../assets/sass/_extend";

  .button {
    position: absolute;
    top: $space - 5px;
    z-index: 6;
    transition: $menu-transition;
    outline: none;
  }

  .app-dashboard.is-active {
    .button {
      transform: translateX(230px);
    }
  }

  .app-dashboard {
    .button {
      transform: translateX($space / 2);
    }
  }
</style>
