<script>
  import { isEmpty } from 'lodash'
  import queySingleTopic from '@/domains/topics/services/querys/single-topic.gql'
  import { schemaTopicView } from '@/domains/topics/schemas'

  import RenderCards from '@/components/render-cards/main.vue'
  import AppPagination from '@/components/pagination.vue'
  import * as TopicComponents from './components'

  import { refreshQueryMixin, loadingMixin } from '@/mixins'

  export default {
    mixins: [ refreshQueryMixin('topic'), loadingMixin('topic') ],
    components: {
      RenderCards,
      AppPagination,
      ...TopicComponents
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
        <author-info :author="topic.author" />
      </div>

      <div class="content">
        <topic-info :topic="topic"/>
      </div>
    </header>

    <section class="view-section">
      <div class="columns">
        <app-progress
          :data="topic.votes_topic"
          :position="topic.position"></app-progress>

        <topic-actions :topic="topic"/>
      </div>

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
