<script>
  import { cardView } from '@/domains/card/schemas'
  import queySingleCard from '@/domains/card/services/querys/single-card.gql'
  import AppCardFooter from '@/domains/card/view/card/footer-card.vue'
  import AppCardShared from './card-shared.vue'
  import { refreshQueryMixin } from '@/mixins'

  export default {
    name: 'card-view',
    components: { AppCardFooter, AppCardShared },
    mixins: [ refreshQueryMixin('card') ],
    data () {
      return {
        card: cardView,
        url: ''
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
      }
    },
    apollo: {
      card () {
        return {
          query: queySingleCard,
          variables: () => {
            return {
              uid: this.$route.params.card
            }
          }
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
      <p> Conheça mais um pouco o autor <router-link :to="`/user/${card.author.uid}/detail`"> aqui </router-link> </p>
      <p> <router-link :to="`/topic/${card.topic.uid}/detail`"> Conheça o tema </router-link> </p>
    </div>

    <h3 class="subtitle has-text-centered"> Compartilhe este argumento </h3>
    <app-card-shared />

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
