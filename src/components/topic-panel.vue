<script>
  import { isEmpty } from 'lodash'

  export default {
    name: 'topic-panel',
    props: ['topic', 'position'],
    computed: {
      hasTopic () {
        return !isEmpty(this.topic)
      },
      namePositive () {
        return (this.hasTopic) ? this.topic.position.positive : ''
      },
      nameNegative () {
        return (this.hasTopic) ? this.topic.position.negative : ''
      },
      countPositive () {
        return (this.hasTopic) ? this.topic.votes_topic.positive.length : 0
      },
      countNegative () {
        return (this.hasTopic) ? this.topic.votes_topic.negative.length : 0
      },
      countCards () {
        return (this.hasTopic) ? this.topic.cards.count : 0
      }
    }
  }
</script>

<template lang="html">
  <div class="box">
    <span class="tag is-warning is-rounded"> {{ position }} </span>
    <h3 class="title is-5">
      {{ topic.title }}
    </h3>
    <p> {{ countCards }} card(s) cadastrados </p>
    <p> {{ namePositive }}: {{ countPositive }} </p>
    <p> {{ nameNegative }}: {{ countNegative }} </p>
    <router-link :to="`/dashboard`" class="button is-success"> Deixe seu voto </router-link>
  </div>
</template>

<style scoped lang="scss">
  .box {
    position: relative;

    > .tag {
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
    }

    .button {
      position: absolute;
      bottom: 1.25rem;
      right: 1.25rem;
    }
  }
</style>
