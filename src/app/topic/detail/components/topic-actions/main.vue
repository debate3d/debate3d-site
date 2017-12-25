<script>
  import CreateCard from './create-card/main.vue'
  import VoteTopic from './vote-topic/main.vue'

  export default {
    components: {
      CreateCard, VoteTopic
    },
    props: {
      topic: {
        type: Object,
        default: () => ({ })
      }
    }
  }
</script>

<template lang="html">
  <div class="column is-6">
    <div class="card">
      <div class="card-content">
        <vote-topic :topic="topic" />

        <create-card :topic="topic" />
      </div>
    </div>
  </div>
</template>
