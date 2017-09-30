<script>
  import { mapGetters } from 'vuex'
  import favoriteMethod from '../../services/add-favorite'

  export default {
    props: ['card'],
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      deckCard () {
        return this.card.deck
      },
      deckLength () {
        return this.deckCard.length
      },
      hasFavorited () {
        const { uid } = this.user
        return this.deckCard.some(item => item.user.uid === uid)
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
              this.$emit('refresh')
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
