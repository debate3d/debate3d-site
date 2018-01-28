<script>
  import query from '@/domains/topics/services/querys/single-topic.gql'
  import { schemaTopicView } from '@/domains/topics/schemas'

  import RenderCards from '@/components/render-cards/main.vue'
  import AppPagination from '@/components/pagination.vue'
  import * as TopicComponents from './components'

  import { refreshQueryMixin } from '@/mixins'
  import { apolloLoadingMixin } from '@/support/mixins'

  const fn = context => {
    context.isLoading = false
  }

  export default {
    mixins: [
      refreshQueryMixin('topic'),
      apolloLoadingMixin(query, 'topic', schemaTopicView, 'data.topic', fn)
    ],
    components: {
      RenderCards,
      AppPagination,
      ...TopicComponents
    },
    data () {
      return {
        page: 1,
        isLoading: true
      }
    },
    computed: {
      hasCards () {
        return this.topic.cards.count !== 0
      },
      apolloVariables () {
        return {
          nickname: this.$route.params.topic,
          page: this.page
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="topic-info">
    <header class="view-header">

      <div class="author-info">
        <author-info :topic="topic" />
      </div>

      <topic-image :topic="topic" />
    </header>

    <section class="view-topic-info">
      <topic-info :topic="topic"/>
    </section>

    <section class="view-section">
      <div class="columns">
        <app-progress
          :is-loading="isLoading"
          :data="topic.votes_topic"
          :position="topic.position"></app-progress>

        <topic-actions :topic="topic"/>
      </div>

      <hr v-if="$__isLogged && hasCards">

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

  .author-info {
    flex-grow: 1;
  }

  .view-header {
    display: flex;
    justify-content: center;

    .tag {
      cursor: pointer;
      margin-right: 5px;
    }

    // On mobile
    @media (max-width: 768px) {
      flex-direction: column;

      .topic-image {
        order: 1;
      }

      .author-info {
        order: 2;
      }
    }

    // On desktop
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

  .view-topic-info {
    margin-top: $space;
  }
</style>
