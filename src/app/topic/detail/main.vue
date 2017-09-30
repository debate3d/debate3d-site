<script>
  import { isEmpty } from 'lodash'
  import queySingleTopic from '@/domains/topics/services/querys/single-topic.gql'
  import { schemaTopicView } from '@/domains/topics/schemas'

  import AuthorInfo from './author-info.vue'
  import AppProgress from './progress'
  import RenderCards from '@/components/render-cards/main.vue'
  import AppVoteTopic from './vote/main.vue'
  import CreateCard from './create-card/main.vue'

  export default {
    components: {
      AuthorInfo,
      AppProgress,
      RenderCards,
      AppVoteTopic,
      CreateCard
    },
    data () {
      return {
        topic: schemaTopicView
      }
    },
    computed: {
      isLogged () {
        return !isEmpty(this.$store.state.auth.user)
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
    },
    methods: {
      refreshTopic () {
        this.$apollo.queries.topic.refetch()
          .catch(err => {
            console.error(err)
          })
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
      <app-progress
        :data="topic.votes_topic"
        :position="topic.position"></app-progress>

      <hr>

      <app-vote-topic
        v-if="isLogged"
        :topic="topic"
        @done="refreshTopic"/>

      <hr v-if="isLogged">

      <create-card
        v-if="isLogged"
        :topic="topic"
        @done="refreshTopic"/>

      <hr v-if="isLogged">

      <render-cards
        :cards="topic.cards"
        successMessage="Conheça opinião de nossos debatedores"
        errorMessage="Esse tema não possui cards"
        @refresh="refreshTopic"></render-cards>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

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