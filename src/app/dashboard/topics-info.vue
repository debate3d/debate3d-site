<script>
  import topicsQuery from '@/domains/topics/services/querys/topics.gql'
  import { boxTopic } from '@/domains/topics/view'
  import { schemaTopicBox } from '@/domains/topics/schemas'

  export default {
    components: { boxTopic },
    computed: {
      allTopics () {
        return this.topics.mostPonts.slice(0, 6)
      }
    },
    data () {
      return {
        topics: {
          mostPonts: [
            schemaTopicBox,
            schemaTopicBox,
            schemaTopicBox,
            schemaTopicBox,
            schemaTopicBox
          ]
        }
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
        <box-topic :topic="topic" :position="key + 1"></box-topic>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  @import "../../assets/sass/extend.sass";

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
