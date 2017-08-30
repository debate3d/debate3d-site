<script>
  import topicsQuery from '../../domains/topics/services/querys/topics.gql'
  import AppTopic from '../../components/topic-panel.vue'
  import { isEmpty } from 'lodash'

  export default {
    components: { AppTopic },
    computed: {
      allTopics () {
        return (isEmpty(this.topics)) ? [] : this.topics.slice(0, 6)
      }
    },
    data () {
      return {
        topics: {}
      }
    },
    apollo: {
      topics: {
        query: topicsQuery
      }
    }
  }
</script>

<template lang="html">
  <section class="topics-info">
    <h2 class="title is-4"> Temas em destaque </h2>
    <div class="columns is-multiline is-centered">
      <div class="column is-half-tablet is-one-third-desktop" v-for="(topic, key) in allTopics">
        <app-topic :topic="topic" :position="key + 1"></app-topic>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @import "../../assets/sass/_extend";

  .topics-info {
    padding: $space;

    .title {
      &:after {
        content: '';
        display: block;
        width: 20%;
        height: 2px;
        background-color: $color4;
        margin: 2px 0 0 5px;
      }
    }
  }
</style>
