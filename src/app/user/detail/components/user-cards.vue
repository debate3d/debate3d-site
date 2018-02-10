<script>
  import mixin from './mixin'
  import RenderCards from '@/components/render-cards/main'

  export default {
    mixins: [ mixin('user-detail-cards', 'not-simple', 'cards') ],
    components: {
      RenderCards
    }
  }
</script>

<template>
  <div v-if="hasCards">

    <render-cards :cards="user.cards"/>

  </div>
</template>
