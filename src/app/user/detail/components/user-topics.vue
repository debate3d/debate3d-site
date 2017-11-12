<script>
  import mixin from './mixin'
  import RenderTopics from '@/components/render-topics/main'

  export default {
    mixins: [ mixin('user-detail-info', 'not-simple', 'topics') ],
    components: {
      RenderTopics
    },
    props: {
      col: {
        type: Number,
        default: 4
      }
    },
    computed: {
      column () {
        return `is-${this.col}`
      }
    }
  }
</script>

<template>
  <div v-if="hasTopics">

    <render-topics
      :topics="user.topics"
      :column="column"/>

  </div>
</template>

<style media="screen" scoped>
  div {
    padding-top: 6px;
  }
</style>
