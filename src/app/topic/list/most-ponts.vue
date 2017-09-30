<script>
  import mostPontsQuery from '@/domains/topics/services/querys/most-ponts.gql'
  import { schemaTopicBox } from '@/domains/topics/schemas'
  import { boxTopic } from '@/domains/topics/view'

  export default {
    name: 'most-ponts',
    components: { boxTopic },
    computed: {
      allTopics () {
        return this.topics.mostPonts
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
      topics () {
        return {
          query: mostPontsQuery,
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
      <box-topic :topic="topic" :position="key + 1"></box-topic>
    </div>
  </div>
</template>

<style lang="css">
</style>
