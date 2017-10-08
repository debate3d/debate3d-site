<script>
  import { mapGetters } from 'vuex'
  import createCard from './create-card'

  export default {
    props: {
      position: Object,
      card_position: Boolean,
      uid_topic: String
    },
    data () {
      return {
        content: '',
        position_card: true
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
    watch: {
      position_card (newValue) {
        this.$emit('update:card_position', newValue)
      }
    },
    methods: {
      createCard () {
        return createCard(this)
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
        v-model="position_card">
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
