<script>
  import { mapGetters } from 'vuex'

  import reactionMethod from '../../services/add-reation'
  import { btnFooterMixin } from '../mixins'
  import { get } from 'lodash'

  export default {
    props: {
      card: Object
    },
    mixins: [ btnFooterMixin('likes', 'likesLength') ],
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      style () {
        const reaction = get(this.reaction, 'reaction')
        const condition = (this.acted && reaction === 'true   ')
        return condition ? 'fa fa-thumbs-up' : 'fa fa-thumbs-o-up'
      }
    },
    methods: {
      like () {
        if (!this.acted && !this.isMyCard) {
          const data = {
            uid_card: this.card.uid,
            reaction: true
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
        }
      }
    }
  }
</script>

<template lang="html">
  <div>
    <a
      href="#"
      class="positive"
      @click.prevent="like"
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
      @click.prevent="$emit('showLike')">
      {{ likesLength }}
    </a>
  </div>
</template>

<style lang="css">
</style>
