<script>
  import { mapGetters } from 'vuex'
  import { isEmpty, cloneDeep } from 'lodash'
  import VoteTopicMutation from './vote-topic-mutation.gql'

  export default {
    name: 'app-vote-topic',
    props: [ 'topic' ],
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
      voteObj () {
        const { votes } = this.user
        const { uid } = this.topic
        const vote = votes.filter(vote => vote.uid_topic === uid)[0]
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
        this.$apollo.mutate({
          mutation: VoteTopicMutation,
          variables: {
            data
          }
        })
        .then(result => {
          const { VoteTopic } = result.data
          const user = cloneDeep(this.user)
          user.votes.push(VoteTopic)
          user.ponts += 2
          this.$store.dispatch('setUser', user)
          this.fullfiedBtn(vote)
          this.$emit('done')
          this.$snackbar.open({
            message: 'Você ganhou 2 pontos',
            type: 'is-success',
            position: 'is-bottom-left',
            actionText: 'OK'
          })
        })
        .catch(err => {
          console.error(err)
          this.btnDisabled = false
          this.$snackbar.open({
            message: 'Voto não computado, tente novamente',
            type: 'is-warning',
            position: 'is-bottom-left',
            actionText: 'OK'
          })
        })
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
  @import "../../../assets/sass/_extend";

  .container {
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .field {
    display: flex;
    width: 80%;
    margin: 0 auto;

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
