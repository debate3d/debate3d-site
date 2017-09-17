<script>
  export default {
    name: 'box-topic',
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
      },
      tags () {
        return this.topic.tags
      }
    }
  }
</script>

<template lang="html">
  <div class="box">
    <span
      class="tag is-warning is-rounded is-position"
      v-if="position !== undefined"> {{ position }} </span>
    <h3 class="title is-5" @click="$router.push(`/topic/${topic.uid}`)">
      {{ topic.title }}
    </h3>
    <p> {{ countCards }} card(s) cadastrados </p>
    <p> {{ namePositive }}: {{ countPositive }} </p>
    <p> {{ nameNegative }}: {{ countNegative }} </p>
    <span
      v-for="tag in tags"
      class="tag is-info"
      @click="$router.push(`/tag/${tag.label}`)"> {{ tag.label }} </span>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/_extend";

  .box {
    position: relative;

    > .title {
      cursor: pointer;
    }

    > .tag {
      cursor: pointer;
      transition: background-color .4s ease;
    }

    > .tag:not(.is-position) {
      margin-right: 5px;
    }

    > .tag.is-position {
      position: absolute;
      top: -0.5rem;
      left: -0.5rem;
    }

    &:hover {
      > .tag {
        background-color: $color3;
      }
    }
  }
</style>
