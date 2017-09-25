<script>
  import CreateCardMutation from './create-card.gql'
  import { mapGetters } from 'vuex'
  import { cloneDeep } from 'lodash'

  export default {
    props: [ 'position', 'uid_topic' ],
    data () {
      return {
        card_position: true,
        content: ''
      }
    },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      options () {
        return [
          {
            label: this.position.positive,
            value: true
          },
          {
            label: this.position.negative,
            value: false
          }
        ]
      },
      btnDisabled () {
        return this.content === ''
      }
    },
    methods: {
      createCard () {
        const data = Object.assign({ }, {
          uid_topic: this.uid_topic,
          content: this.content,
          position: this.card_position
        })
        this.content = ''

        this.$apollo.mutate({
          mutation: CreateCardMutation,
          variables: {
            data
          }
        })
        .then(result => {
          const { InsertCard } = result.data
          const user = cloneDeep(this.user)
          user.cards.records.push(InsertCard)
          user.ponts += 10
          this.$store.dispatch('setUser', user)
          this.$emit('done')
          this.$parent.close()
          this.$snackbar.open({
            message: 'Você ganhou 10 pontos',
            type: 'is-success',
            position: 'is-bottom-left',
            actionText: 'OK'
          })
        })
        .catch(err => {
          console.error(err)
          this.$snackbar.open({
            message: err,
            type: 'is-warning',
            position: 'is-bottom-left',
            actionText: 'OK'
          })
        })
      }
    }
  }
</script>

<template lang="html">
  <div class="box">
    <h1 class="title is-4"> Registre sua opinião </h1>
    <b-field
      label="Se posicione">
      <b-select
        placeholder="Sua posição em relação ao tema"
        v-model="card_position">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value">
          {{ option.label }}
        </option>
      </b-select>
    </b-field>

    <b-field
      label="Conteúdo">
      <b-input maxlength="1000" type="textarea" v-model="content"></b-input>
    </b-field>

    <button
      class="button is-success"
      :disabled="btnDisabled"
      @click="createCard"> Criar card </button>
  </div>
</template>
