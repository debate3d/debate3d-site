<script>
  import { isEmpty } from 'lodash'
  import queySingleTopic from '@/domains/topics/services/querys/single-topic.gql'
  import { schemaTopicView } from '@/domains/topics/schemas'

  import AuthorInfo from './author-info.vue'
  import AppProgress from './progress'
  import RenderCards from '@/components/render-cards/main.vue'
  import AppVoteTopic from './vote/main.vue'
  import CreateCard from './create-card/main.vue'
  import AppPagination from '@/components/pagination.vue'

  import { refreshQueryMixin } from '@/mixins'

  export default {
    mixins: [ refreshQueryMixin('topic') ],
    components: {
      AuthorInfo,
      AppProgress,
      RenderCards,
      AppVoteTopic,
      CreateCard,
      AppPagination
    },
    data () {
      return {
        topic: schemaTopicView,
        page: 1
      }
    },
    computed: {
      isLogged () {
        return !isEmpty(this.$store.state.auth.user)
      },
      hasCards () {
        return this.topic.cards.count !== 0
      }
    },
    apollo: {
      topic () {
        return {
          query: queySingleTopic,
          variables: () => {
            return {
              uid: this.$route.params.topic,
              page: this.page
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
        <p class="content"> {{ topic.content }} </p>
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
        :topic="topic"/>

      <hr v-if="isLogged">

      <create-card
        v-if="isLogged"
        :topic="topic"/>

      <hr v-if="isLogged && hasCards">

      <app-pagination
        v-if="hasCards"
        :total="topic.cards.count"
        :current.sync="page"/>

      <render-cards
        :cards="topic.cards"
        successMessage="Conheça opinião de nossos debatedores"
        errorMessage="Esse tema não possui cards"></render-cards>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .topic-info {
    padding: $space;

    .content {
      word-wrap: break-word;
    }
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
