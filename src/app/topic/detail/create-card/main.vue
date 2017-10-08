<script>
  import AppForm from './form.vue'
  import { mapGetters } from 'vuex'
  import { isEmpty } from 'lodash'

  export default {
    components: { AppForm },
    props: {
      topic: Object
    },
    data () {
      return {
        state: false,
        canCreate: false,
        card_position: true
      }
    },
    watch: {
      topic () {
        if (!this.canCreate) return
        const { uid } = this.user
        const cards = this.topic.cards.records
        const anyCardCreate = cards.filter(card => card.author.uid === uid)[0]
        this.canCreate = isEmpty(anyCardCreate)
      }
    },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      statePosition () {
        return this.card_position ? 'is-positive' : 'is-negative'
      }
    },
    mounted () {
      this.card_position = true
      const { uid } = this.user
      const cards = this.topic.cards.records
      const anyCardCreate = cards.filter(card => card.author.uid === uid)[0]
      this.canCreate = isEmpty(anyCardCreate)
    },
    beforeDestroy () {
      this.card_position = true
    }
  }
</script>

<template lang="html">
  <div class="container">
    <h5
      class="title is-4 has-text-centered"
      v-if="!canCreate"> Você já possui card cadastrado </h5>
    <button
      class="button is-primary is-large create-card-button"
      @click="state = true"
      v-if="canCreate">
      <span class="icon is-small">
        <i class="fa fa-plus"></i>
      </span>
    </button>
    <b-modal
      :active.sync="state"
      v-if="canCreate"
      class="card-form"
      :class="statePosition">
      <app-form
        @done="$emit('done')"
        :uid_topic="topic.uid"
        :position="topic.position"
        :card_position.sync="card_position"></app-form>
    </b-modal>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    margin: 10px auto;

    .button {
      margin: 0 auto;
      display: block;
    }

    .create-card-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 3;
      border-radius: 100%;
      width: 80px;
      height: 80px;

      @media (max-width: 768px) {
        width: 65px;
        height: 65px;
      }
    }
  }

  .modal-background {
    background-color: transparent;
  }

  .card-form {
    &.is-positive {
      background-color: rgba(0, 152, 218, .8);
    }

    &.is-negative {
      background-color: rgba(219, 52, 56, .8);
    }
  }
</style>
