<script>
  import AppForm from './form.vue'
  import { mapGetters } from 'vuex'
  import { isEmpty } from 'lodash'

  export default {
    components: { AppForm },
    props: [ 'topic' ],
    data () {
      return {
        state: false
      }
    },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      canCreate () {
        const { uid } = this.user
        const cards = this.topic.cards.records
        const anyCardCreate = cards.filter(card => card.author.uid === uid)[0]
        return isEmpty(anyCardCreate)
      }
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
    <b-modal :active.sync="state" v-if="canCreate">
      <app-form
        @done="$emit('done')"
        :uid_topic="topic.uid"
        :position="topic.position"></app-form>
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
</style>
