<script>
  import mostVotedQuery from '@/domains/topics/services/querys/most-voted.gql'
  import { paginationMixin } from '../helpers'

  export default {
    name: 'most-voted',
    mixins: [ paginationMixin('mostVoted', mostVotedQuery) ]
  }
</script>

<template lang="html">
  <div class="columns is-multiline is-centered">
    <div class="column is-half-tablet is-one-third-desktop" v-for="(topic, key) in allTopics">
      <box-topic :topic="topic" :position="key + 1"></box-topic>
    </div>
  </div>
</template>
