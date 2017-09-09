<script>
  import mostCardsQuery from '../../domains/topics/services/querys/most-cards.gql'
  import { schemaTopicBox } from '../../domains/topics/schemas'
  import AppTopic from '../../components/topic-panel.vue'

  export default {
    name: 'most-carrds',
    components: { AppTopic },
    computed: {
      allTopics () {
        return this.topics.mostCards
      }
    },
    data () {
      return {
        topics: {
          mostCards: [
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
          query: mostCardsQuery,
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
