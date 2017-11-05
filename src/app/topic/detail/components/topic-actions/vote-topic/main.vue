<script>
  import { mapGetters } from 'vuex'
  import { isEmpty } from 'lodash'

  import voteAction from './vote'

  export default {
    name: 'app-vote-topic',
    props: {
      topic: Object
    },
    data () {
      return {
        btnDisabled: false
      }
    },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      isLogged () {
        return !isEmpty(this.user)
      },
      positiveLength () {
        return this.topic.votes_topic.positive.length
      },
      negativeLength () {
        return this.topic.votes_topic.negative.length
      },
      positiveLabel () {
        return this.topic.position.positive
      },
      negativeLabel () {
        return this.topic.position.negative
      },
      hasVoted () {
        return !isEmpty(this.voteObj)
      },
      votes () {
        const votes = this.topic.votes_topic
        return votes.positive.concat(votes.negative)
      },
      voteObj () {
        const { uid } = this.user
        const vote = this.votes.filter(vote => vote.user.uid === uid)[0]
        console.log(vote)
        return isEmpty(vote) ? {} : vote
      }
    },
    methods: {
      vote (vote) {
        if (this.hasVoted) {
          this.$snackbar.open({
            message: 'Você já votou neste tópico',
            type: 'is-warning'
          })
          return
        }
        if (this.hasVoted || this.btnDisabled || !this.isLogged) return
        const data = {
          uid_topic: this.topic.uid,
          vote
        }
        this.btnDisabled = true
        voteAction(this, data)
      }
    }
  }
</script>

<template lang="html">
  <div>
    <p class="title is-5 has-text-centered"> Deixe seu voto </p>

    <div class="field is-grouped is-centered">

      <p>
        <span
          class="icon is-large is-positive"
          @click="vote(true)">

          <i
            class="fa fa-3x"
            :disable="btnDisabled"
            :class="[ { 'fa-thumbs-up' : voteObj.vote === true }, 'fa-thumbs-o-up']"></i>
        </span>
        <span class="is-size-4"> {{ positiveLength }} </span>
      </p>

      <p>
        <span
          class="icon is-large is-negative"
          @click="vote(false)">

          <i
            class="fa fa-3x"
            :class="[ { 'fa-thumbs-down' : voteObj.vote === false }, 'fa-thumbs-o-down']"></i>
        </span>
        <span class="is-size-4"> {{ negativeLength }} </span>
      </p>

    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../../../../assets/sass/extend.sass";

  .field {
    display: flex;
    margin: 0 auto;
    width: 100%;

    p {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .is-size-4 {
      margin-left: 10px;
    }

    .icon {
      cursor: pointer;
    }

    .is-positive {
      color: $positive-color;
    }

    .is-negative {
      color: $negative-color;
    }
  }
</style>
