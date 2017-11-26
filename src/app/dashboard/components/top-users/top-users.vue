<script>
  import * as Components from './components'

  export default {
    components: { ...Components }
  }
</script>

<template lang="html">
  <div class="top-users">
    <top-debaters></top-debaters>
    <top-moderators></top-moderators>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../../assets/sass/extend.sass";

  .top-users {
    display: flex;
    padding: $space  - 5px;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
</style>
