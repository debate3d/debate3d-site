<script>
  import mixin from './mixin'
  import RenderTopics from '@/components/render-topics/main'

  export default {
    mixins: [ mixin('user-detail-info', 'not-simple', 'topics') ],
    components: {
      RenderTopics
    }
  }
</script>

<template>
  <div
    class="user-view__topics"
    v-if="hasTopics">

    <button
      class="button"
      @click="showTopics = !showTopics"> {{ textButtonTopics }} </button>
    <h2
      class="title is-4 has-text-centered"
      v-if="showTopics"> Temas do usuário </h2>
    <render-topics
      v-if="showTopics"
      :topics="user.topics"
      column="is-6"/>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../../../assets/sass/extend.sass';

  .user-view__topics {
    margin: $space 0;
  }
</style>
