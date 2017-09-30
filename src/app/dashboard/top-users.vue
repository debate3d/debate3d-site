<script>
  import AppDebaters from './top-debaters.vue'
  import AppModerators from './top-moderators.vue'

  export default {
    components: { AppDebaters, AppModerators }
  }
</script>

<template lang="html">
  <div class="top-users">
    <app-debaters></app-debaters>
    <app-moderators></app-moderators>
  </div>
</template>

<style scoped lang="scss">
  @import "../../assets/sass/extend.sass";

  .top-users {
    display: flex;
    padding: $space  - 5px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
</style>
