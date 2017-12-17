<script>
  import { mapGetters } from 'vuex'
  import { isEmpty } from 'lodash'

  import AppForm from './form.vue'
  import { loginMixin } from '@/support/mixins'

  export default {
    mixins: [ loginMixin ],
    components: { AppForm },
    props: {
      topic: Object
    },
    data () {
      return {
        state: false,
        card_position: true
      }
    },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      statePosition () {
        return this.card_position ? 'is-positive' : 'is-negative'
      },
      isLogged () {
        return !isEmpty(this.user)
      },
      cards () {
        return this.topic.cards.records
      },
      canCreate () {
        if (!this.isLogged) {
          return false
        }
        const { uid } = this.user
        return this.cards.some(card => card.author.uid === uid)
      },
      hasCreated () {
        const { uid } = this.user
        return this.isLogged && this.cards.some(card => card.author.uid === uid)
      }
    },
    methods: {
      openModal () {
        if (this.canCreate) {
          this.state = true
          return
        }

        this.$__loadLoginMixin()
      }
    },
    mounted () {
      this.card_position = true
    },
    beforeDestroy () {
      this.card_position = true
    }
  }
</script>

<template lang="html">
  <div>
    <hr v-if="hasCreated">

    <h5
      class="title is-4 has-text-centered"
      v-if="hasCreated"> Você já possui card cadastrado </h5>
    <button
      class="button is-primary is-large create-card-button"
      @click="openModal"
      v-if="!hasCreated">
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

    <!-- Modal when user is not logged -->
    <modal-form-login ref="modalFormLogin" />
  </div>
</template>

<style scoped>
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
    width: 60px;
    height: 60px;
    box-shadow: 1px 1px 4px 0px rgba(92,92,92,1);
  }

  @media screen (max-width: 768px) {
    .create-card-button {
      width: 65px;
      height: 65px;
    }
  }

  .card-form.is-positive >>> .modal-background {
    background-color: rgba(0, 152, 218, .8);
  }

  .card-form.is-negative >>> .modal-background {
    background-color: rgba(219, 52, 56, .8);
  }
</style>
