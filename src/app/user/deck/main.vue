<script>
  import { isEmpty } from 'lodash'
  import { mapGetters } from 'vuex'

  import query from '@/domains/user/services/querys/my-deck.gql'
  import AppCard from '@/domains/card/view/card/main'
  import NegativeFace from '@/components/negative'
  import { miniCard } from '@/domains/card/schemas'
  import { apolloLoadingMixin } from '@/support/mixins'

  export default {
    name: 'my-deck',
    components: { AppCard, NegativeFace },
    mixins: [
      apolloLoadingMixin(query, 'user', {}, 'data.user')
    ],
    data () {
      return {
        user: {
          deck: [
            {
              card: miniCard
            }
          ]
        }
      }
    },
    computed: {
      ...mapGetters({
        'getUser': 'getUser'
      }),
      deck () {
        return this.user.deck.reduce((acc, item) => {
          acc.push(item.card)
          return acc
        }, [])
      },
      hasData () {
        if (this.isLoading) return true
        return !isEmpty(this.user.deck)
      },
      apolloVariables () {
        const uid = this.getUser.uid || ''
        return {
          uid
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="my-deck">
    <h1 class="title has-text-centered"> Meus cards guardados no deck </h1>
    <div class="block-flex-wraped" v-if="deck.length > 0">
      <app-card
        v-for="(card, index) in deck"
        :key="index"
        :card="card"></app-card>
    </div>
    <negative-face
      v-if="hasData"
      message="Você não possui cards guardados no deck ainda" />
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .my-deck {
    padding: $space;

    .block-flex-wraped {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
</style>
