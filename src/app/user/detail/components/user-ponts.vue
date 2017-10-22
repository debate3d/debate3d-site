<script>
  import mixin from './mixin'
  import UserStats from '@/domains/user/view/user-stats/main.vue'

  export default {
    mixins: [ mixin('user-detail-info', 'not-simple', 'ponts') ],
    components: {
      UserStats
    }
  }
</script>

<template>
  <div class="user__ponts">
    <button
      type="button" name="button" class="button"
      @click="showPonts = !showPonts">
      {{ textButtonPonts }}
    </button>
    <user-stats :uid="user.uid" v-if="showPonts"/>
  </div>
</template>

<style lang="scss" scoped>
  .user__ponts {
    .button {
      margin-bottom: 10px;
    }
  }
</style>
