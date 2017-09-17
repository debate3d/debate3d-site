<script>
  import BoxTopic from '@/domains/topics/view/box-topic.vue'

  export default {
    name: 'render-topics',
    props: ['topics', 'successMessage', 'errorMessage', 'column'],
    components: { BoxTopic },
    computed: {
      count () {
        return this.topics.count
      },
      records () {
        return this.topics.records
      }
    }
  }
</script>

<template lang="html">
  <div>
    <p class="title is-5 has-text-centered" v-if="count > '0'">
      {{ successMessage }}
    </p>
    <p class="title is-5 has-text-centered" v-if="count === '0'">
      {{ errorMessage }}
    </p>
    <div class="columns is-multiline is-centered">
      <div class="column" :class="column" v-for="(topic, index) in records">
        <box-topic
          :key="index"
          :topic="topic" />
      </div>
    </div>
  </div>
</template>
