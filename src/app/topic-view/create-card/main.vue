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
        const cards = this.user.cards.records
        const { uid } = this.topic
        const anyCardCreate = cards.filter(card => card.uid_topic === uid)[0]
        return isEmpty(anyCardCreate)
      }
    }
  }
</script>

<template lang="html">
  <div class="container">
    <h5
      class="title is-5 has-text-centered"
      v-if="canCreate"> Deixe sua opinião </h5>
    <h5
      class="title is-4 has-text-centered"
      v-if="!canCreate"> Você já possui card cadastrado </h5>
    <button
      class="button is-primary is-outlined is-medium"
      @click="state = true"
      v-if="canCreate"> Criar card </button>
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
  }
</style>
