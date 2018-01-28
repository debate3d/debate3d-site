<script>
  import { cardView } from '@/domains/card/schemas'
  import query from '@/domains/card/services/querys/single-card.gql'
  import AppCardFooter from '@/domains/card/view/card/components/footer-card'
  import SharedLinks from '@/components/shared-links'
  import { apolloLoadingMixin, refreshQueryMixin } from '@/support/mixins'

  export default {
    name: 'card-view',
    components: { AppCardFooter, SharedLinks },
    mixins: [
      refreshQueryMixin('card'),
      apolloLoadingMixin(query, 'card', cardView, 'data.card')
    ],
    data () {
      return {
        card: cardView
      }
    },
    computed: {
      created () {
        return this.card.created
      },
      position () {
        const positionsTopic = this.card.topic.position
        const cardPosition = this.card.position
        return (cardPosition === 'true')
          ? positionsTopic.positive
          : positionsTopic.negative
      },
      positioning () {
        return (this.card.position === 'true') ? 'is-positive' : 'is-negative'
      },
      url () {
        return location.href
      },
      hasVideo () {
        return this.card.has_video || false
      },
      urlVideo () {
        return this.card.url_video
      },
      apolloVariables () {
        return {
          uid: this.$route.params.card
        }
      }
    },
    mounted () {
      if (window !== undefined && window.FB !== undefined) {
        window.FB.XFBML.parse()
      }
    }
  }
</script>

<template lang="html">
  <div class="card" :class="positioning">
    <div class="card-title">
      <h2 class="card-header-title title is-4">
        {{ card.author.name }}
        fala sobre {{ card.topic.title }}
      </h2>
    </div>

    <div class="card-content content">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          v-if="hasVideo"
          class="embed-responsive-item"
          :src="urlVideo"
          frameborder="0"
          gesture="media"
          allowfullscreen></iframe>
      </div>
      <blockquote>
        {{ card.content }}
      </blockquote>
      <ul>
        <li>
          Card criado no dia
          <span class="has-text-weight-bold"> {{ created }} </span>
        </li>
        <li>
          Posicionamento
          <span class="has-text-weight-bold"> {{ position }} </span>
        </li>
      </ul>
      <p> Conheça mais um pouco o autor <router-link :to="`/user/${card.author.nickname}/detail`"> aqui </router-link> </p>
      <p> <router-link :to="`/topic/${card.topic.nickname}/detail`"> Conheça o tema </router-link> </p>
    </div>

    <h3 class="subtitle has-text-centered"> Compartilhe este argumento </h3>

    <shared-links />

    <app-card-footer :card="card" />

    <hr>
    <div
      class="fb-comments"
      :data-href="url"
      data-width="100%"
      data-numposts="10"></div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../../assets/sass/extend.sass';

  .card {
    max-width: 800px;
    margin: $space auto;

    .embed-responsive iframe {
      width: 100%;
      min-height: 300px;
    }

    &.is-positive {
      & .card-header,
      & .card-header-title {
        background-color: #0098DA;
        color: white;
      }
    }

    &.is-negative {
      & .card-header,
      & .card-header-title {
        background-color: #DB3438;
        color: white;
      }
    }

    .card-content.content {
      margin-bottom: 0;
    }
  }
</style>
