<script>
  import { mapGetters } from 'vuex'

  import queryMyDeck from '@/domains/user/services/querys/my-deck.gql'
  import AppCard from '@/domains/card/view/card/main'
  import NegativeFace from '@/components/negative'
  import { miniCard } from '@/domains/card/schemas'

  export default {
    name: 'my-deck',
    components: { AppCard, NegativeFace },
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
      }
    },
    apollo: {
      user () {
        return {
          query: queryMyDeck,
          variables () {
            return {
              uid: this.getUser.uid
            }
          },
          fetchPolicy: 'network-only'
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
      v-if="deck.length === 0"
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
