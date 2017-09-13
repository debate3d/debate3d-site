<script>
  import queySingleTopic from '../../domains/topics/services/querys/single-topic.gql'
  import { schemaTopicView } from '../../domains/topics/schemas'
  import AuthorInfo from './author-info.vue'

  export default {
    components: { AuthorInfo },
    data () {
      return {
        topic: schemaTopicView
      }
    },
    apollo: {
      topic () {
        return {
          query: queySingleTopic,
          variables: () => {
            return {
              uid: this.$route.params.topic
            }
          }
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="topic-info">
    <div class="view-header">
      <div class="author-info">
        <author-info :author="topic.author"></author-info>
      </div>
      <div class="topic-info content card">
        <h1 class="title"> {{ topic.title }} </h1>
        <p> {{ topic.content }} </p>
        <span
          v-for="tag in topic.tags"
          class="tag is-info"
          @click="$router.push(`/tag/${tag.label}`)"> {{ tag.label }} </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "../../assets/sass/_extend";

  .topic-info {
    padding: $space;
  }

  .view-header {
    display: flex;

    .tag {
      cursor: pointer;
      margin-right: 5px;
    }

    @media (max-width: 768px) {
      flex-direction: column;

      .author-info {
        margin-bottom: $space / 2;
      }
    }

    @media (min-width: 769px) {
      flex-direction: row;

      .author-info {
        min-width: 300px;
        margin-right: $space / 2;
      }
    }
  }
</style>
