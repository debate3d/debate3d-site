<script>
  export default {
    name: 'topic-panel',
    props: ['topic', 'position'],
    computed: {
      namePositive () {
        return this.topic.position.positive
      },
      nameNegative () {
        return this.topic.position.negative
      },
      countPositive () {
        return this.topic.votes_topic.positive.length
      },
      countNegative () {
        return this.topic.votes_topic.negative.length
      },
      countCards () {
        return this.topic.cards.count
      }
    }
  }
</script>

<template lang="html">
  <div class="box" @click="$router.push(`/${topic.uid}`)">
    <span class="tag is-warning is-rounded"> {{ position }} </span>
    <h3 class="title is-5">
      {{ topic.title }}
    </h3>
    <p> {{ countCards }} card(s) cadastrados </p>
    <p> {{ namePositive }}: {{ countPositive }} </p>
    <p> {{ nameNegative }}: {{ countNegative }} </p>
  </div>
</template>

<style scoped lang="scss">
  @import "../assets/sass/_extend";

  .box {
    position: relative;
    cursor: pointer;

    > .tag {
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
      transition: background-color .4s ease;
    }

    &:hover {
      > .tag {
        background-color: $color3;
      }
    }
  }
</style>
