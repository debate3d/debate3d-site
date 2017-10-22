<script>
  import mixin from './mixin'
  import RenderCards from '@/components/render-cards/main'

  export default {
    mixins: [ mixin('user-detail-info', 'not-simple', 'cards') ],
    components: {
      RenderCards
    }
  }
</script>

<template>
  <div
    class="user-view__cards"
    v-if="hasCards">
    <button
      class="button"
      @click="showCards = !showCards"> {{ textButtonCards }} </button>
    <h2
      class="title is-4 has-text-centered"
      v-if="showCards"> Cards do usuário </h2>
    <render-cards
      v-if="showCards"
      :cards="user.cards"
      column="is-6"/>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../../../assets/sass/extend.sass';

  .user-view__cards {
    margin: $space 0;
  }
</style>
