<script>
  import LogoLetters from '../../components/logo-letters.vue'

  export default {
    name: 'dashboard-main-header',
    components: { LogoLetters }
  }
</script>

<template lang="html">
  <header class="header">
    <logo-letters></logo-letters>
  </header>
</template>

<style lang="scss" scoped>
  @import "../../assets/sass/_extend";

  .header {
    background-color: $menu-color;
    padding: $space;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .image {
      max-width: 150px;
    }
  }
</style>
