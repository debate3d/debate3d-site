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
        return isEmpty(vote) ? {} : vote
      }
    },
    methods: {
      vote (vote) {
        const data = {
          uid_topic: this.topic.uid,
          vote
        }
        this.btnDisabled = true
        voteAction(this, data)
      },
      fullfiedBtn (vote) {
        if (vote) {
          this.$refs.btnPositive.classList.add('is-positive')
          return
        }
        this.$refs.btnNegative.classList.add('is-negative')
      }
    }
  }
</script>

<template lang="html">
  <div class="container">
    <p class="title is-5 has-text-centered"> Deixe seu voto </p>

    <div class="field is-grouped is-centered">

      <p class="control">
        <button
          class="button is-outlined is-medium"
          @click="vote(true)"
          :class="{ 'is-positive' : voteObj.vote === true }"
          ref="btnPositive"
          :disabled="btnDisabled || hasVoted">
          <span> {{ positiveLength }} </span>
          <span class="icon">
            <i class="fa fa-thumbs-o-up"></i>
          </span>
          <span> {{ positiveLabel }} </span>
        </button>
      </p>

      <p class="control">
        <button
          class="button is-outlined is-medium"
          @click="vote(false)"
          :class="{ 'is-negative' : voteObj.vote === false }"
          ref="btnNegative"
          :disabled="btnDisabled || hasVoted">
          <span> {{ negativeLength }} </span>
          <span class="icon">
            <i class="fa fa-thumbs-o-down"></i>
          </span>
          <span> {{ negativeLabel }} </span>
        </button>
      </p>

    </div>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../../assets/sass/extend.sass";

  .container {
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .field {
    display: flex;
    margin: 0 auto;

    @media (min-width: 769px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      width: 95%;
    }

    .control {
      flex-grow: 1;

      button {
        outline: none;
        width: 100%;
      }
    }

    .is-positive {
      background-color: $positive-color;
      color: white;
    }

    .is-negative {
      background-color: $negative-color;
      color: white;
    }
  }
</style>
