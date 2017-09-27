<script>
  import favoriteMethod from '../../services/add-favorite'
  import { mapGetters } from 'vuex'
  import { defaultsDeep } from 'lodash'

  export default {
    props: ['card'],
    computed: {
      ...mapGetters({
        'user': 'getUser',
        'deck': 'getDeck'
      }),
      deckLength () {
        return this.card.deck.length
      },
      hasFavorited () {
        const { uid } = this.card
        return this.deck.some(item => item.card.uid === uid)
      },
      style () {
        return this.hasFavorited ? 'fa fa-star' : 'fa fa-star-o'
      },
      isMyCard () {
        const { uid } = this.user
        return this.card.author.uid === uid
      }
    },
    methods: {
      favorite () {
        if (!this.hasFavorited && !this.isMyCard) {
          const { uid } = this.card
          favoriteMethod(this, uid)
            .then(result => {
              this.$snackbar.open('Você ganhou 5 pontos')
              const deck = result.data.AddDeck
              const storeUser = this.$store.state.auth.user
              const merged = defaultsDeep({ }, storeUser)
              merged.ponts += 5
              merged.deck.push(deck)
              this.$store.dispatch('setUser', merged)
            })
            .catch(err => {
              console.error(err)
              this.$snackbar.open({
                message: 'Não foi possível guardar no deck',
                type: 'is-warning'
              })
            })
        }
      }
    }
  }
</script>

<template lang="html">
  <div>
    <a
      href="#"
      class="favorited"
      @click.prevent="favorite"
      :disabled="hasFavorited">
      <span
        class="icon is-medium"
        aria-hidden="true">
        <i :class="style"></i>
      </span>
    </a>
    <a
      href="#"
      class="vote"
      @click.prevent="$emit('showFavorite')">
      {{ deckLength }}
    </a>
  </div>
</template>

<style lang="css">
</style>
