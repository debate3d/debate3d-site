<script>
  import { mapGetters } from 'vuex'
  import { get } from 'lodash'

  import reactionMethod from '../../services/add-reation'
  import { btnFooterMixin } from '../mixins'

  export default {
    props: {
      card: Object
    },
    mixins: [ btnFooterMixin('dislikes', 'dislikesLength') ],
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      style () {
        const reaction = get(this.reaction, 'reaction')
        const condition = (this.acted && reaction === 'false  ')
        return condition ? 'fa fa-thumbs-down' : 'fa fa-thumbs-o-down'
      },
      disliked () {
        return this.acted && this.reaction.reaction === 'false  '
      }
    },
    methods: {
      dislike () {
        if (!this.acted && !this.isMyCard) {
          const data = {
            uid_card: this.card.uid,
            reaction: false
          }
          reactionMethod(this, data)
          return
        }
        if (this.acted) {
          this.$snackbar.open({
            message: 'Você já reagiu a este card',
            type: 'is-warning'
          })
          return
        }
        if (this.isMyCard) {
          this.$snackbar.open({
            message: 'Você não pode reagir ao seu proprio card',
            type: 'is-warning'
          })
          return
        }
      }
    }
  }
</script>

<template lang="html">
  <div>
    <a
      href="#"
      class="negative"
      :class="{ 'is-active': disliked }"
      @click.prevent="dislike"
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
      @click.prevent="$emit('showDislike')">
      {{ dislikesLength }}
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .negative,
  .negative .vote {
    transition: color 0.5s ease;
  }

  .negative:hover span,
  .card-footer-item:hover .negative + .vote,
  .negative.is-active + .vote,
  .negative.is-active span {
    color: #ff4a4a;
  }

  a,
  span {
    color: #949494;
  }
</style>
