<script type="text/javascript">
  export default {
    props: [ 'label', 'route' ],
    computed: {
      routeAtual () { return this.$route.path },
      isActive () { return (this.routeAtual === this.route) ? 'is-active' : '' }
    },
    methods: {
      removeClassMenu () {
        this.$emit('remove-class-menu')
      }
    }
  }
</script>

<template>
  <li class="menu-item">
    <router-link
      :class="isActive"
      :to="route"
      @click.native="removeClassMenu"> {{ label }} </router-link>
  </li>
</template>

<style scoped lang="scss">
  .menu-item {
    margin: 5px 0;
  }
</style>
