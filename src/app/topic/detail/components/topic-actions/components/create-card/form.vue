<script>
  import { mapGetters } from 'vuex'
  import { createCard } from '../../support'

  export default {
    props: {
      position: Object,
      card_position: Boolean,
      uid_topic: String
    },
    data () {
      return {
        content: '',
        has_video: false,
        url_video: null,
        position_card: true,
        onSave: false
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
        return this.content === '' || this.onSave
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

    <b-field label="Gostaria de inserir um vídeo?" class="radio-button">
      <div class="radio-buttons">
        <b-radio-button v-model="has_video"
          :native-value="true"
          type="is-success">
          <b-icon icon="check"></b-icon>
          <span>Sim</span>
        </b-radio-button>

        <b-radio-button v-model="has_video"
            :native-value="false"
            type="is-danger">
            <b-icon icon="close"></b-icon>
            <span>Não</span>
        </b-radio-button>
      </div>
    </b-field>

    <b-field
      label="Url do vídeo" v-if="has_video"
      message="Cole a url do vídeo aqui">
      <b-input type="url" v-model="url_video"></b-input>
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

<style media="screen" scoped>
  .radio-button {
    display: block;
  }

  .radio-buttons {
    display: flex;
  }
</style>
