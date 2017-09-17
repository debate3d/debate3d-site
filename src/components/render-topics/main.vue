<script>
  import BoxTopic from '@/domains/topics/view/box-topic.vue'

  export default {
    name: 'render-topics',
    props: ['topics', 'successMessage', 'errorMessage'],
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
    <div class="block-flex-wraped">
      <box-topic
        v-for="(topic, index) in records"
        :key="index"
        :topic="topic" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .block-flex-wraped {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .box {
      flex-grow: 1;
      max-width: 400px;
    }
  }
</style>
