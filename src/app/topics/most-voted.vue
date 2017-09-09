<script>
  import mostVotedQuery from '../../domains/topics/services/querys/most-voted.gql'
  import { schemaTopicBox } from '../../domains/topics/schemas'
  import AppTopic from '../../components/topic-panel.vue'

  export default {
    name: 'most-voted',
    components: { AppTopic },
    computed: {
      allTopics () {
        return this.topics.mostVoted
      }
    },
    data () {
      return {
        topics: {
          mostVoted: [
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
      topics () {
        return {
          query: mostVotedQuery,
          variables () {
            return {
              page: 1
            }
          }
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="columns is-multiline is-centered">
    <div class="column is-half-tablet is-one-third-desktop" v-for="(topic, key) in allTopics">
      <app-topic :topic="topic" :position="key + 1"></app-topic>
    </div>
  </div>
</template>

<style lang="css">
</style>
