<script>
  import { mapGetters } from 'vuex'

  import favoriteMethod from '../../services/add-favorite'
  import { btnFooterMixin } from '../mixins'

  export default {
    props: {
      card: Object
    },
    mixins: [ btnFooterMixin('deck', 'deckLength') ],
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      style () {
        return this.acted ? 'fa fa-star' : 'fa fa-star-o'
      }
    },
    methods: {
      favorite () {
        if (!this.acted && !this.isMyCard) {
          const { uid } = this.card
          favoriteMethod(this, uid)
        }
        if (this.acted) {
          this.$snackbar.open({
            message: 'Você já guardou no deck este card',
            type: 'is-warning'
          })
        }
        if (this.isMyCard) {
          this.$snackbar.open({
            message: 'Você não pode guardar no deck o seu proprio card',
            type: 'is-warning'
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
      :disabled="acted">
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
