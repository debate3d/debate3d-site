<script>
  import queySingleTopic from '../../domains/topics/services/querys/single-topic.gql'
  import { schemaTopicView } from '../../domains/topics/schemas'

  import AuthorInfo from './author-info.vue'
  import AppProgress from './progress'
  import RenderCards from '../../components/render-cards/main.vue'

  export default {
    components: { AuthorInfo, AppProgress, RenderCards },
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
    <header class="view-header">
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
    </header>
    <section class="view-section">
      <p class="title is-5 has-text-centered"> Votos </p>

      <app-progress
        :data="topic.votes_topic"
        :position="topic.position"></app-progress>

      <!-- Aqui irá entrar o componente para voto -->

      <hr>

      <render-cards
        :cards="topic.cards"
        successMessage="Conheça opinião de nossos debatedores"
        errorMessage="Esse tema não possui cards"></render-cards>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @import "../../assets/sass/_extend";

  .topic-info {
    padding: $space;
  }

  .view-header {
    display: flex;
    justify-content: center;

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

  .view-section {
    margin: $space auto;
  }
</style>
