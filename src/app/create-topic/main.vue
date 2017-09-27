<script>
  import PositionsQuery from './positions.gql'
  import { isEmpty, uniq } from 'lodash'
  import Autocomplete from './autocomplete.vue'

  export default {
    name: 'create-topic',
    components: { Autocomplete },
    data () {
      return {
        positions: [],
        id_position: '',
        content: '',
        title: '',
        selected: []
      }
    },
    apollo: {
      positions () {
        return {
          query: PositionsQuery
        }
      }
    },
    methods: {
      submit () {
      },
      setSelected (value) {
        if (!isEmpty(value)) {
          this.selected.push(value)
          this.selected = uniq(this.selected)
          return
        }
      }
    },
    computed: {
      isFormValid () {
        return !isEmpty(this.content) && !isEmpty(this.id_position) && !isEmpty(this.title)
      }
    }
  }
</script>

<template lang="html">
  <div class="create-topic">
    <h1 class="title has-text-centered"> Criar tópico </h1>
    <hr>

    <form action="#" class="app-form" @submit.prevent="submit">
      <b-field
        label="Título">
        <b-input placeholder="Digite um titulo" v-model="title" type="text"/>
      </b-field>

      <b-field
        label="Conteúdo">
        <b-input maxlength="1000" type="textarea" v-model="content"></b-input>
      </b-field>

      <b-field
        label="Qual dicotomia quer para o seu tema?">
        <b-select
          placeholder="Dicotomias"
          v-model="id_position"
          expanded>
          <option
            v-for="position in positions"
            :value="position.id"
            :key="position.id">
            {{ position.positive }} | {{ position.negative }}
          </option>
        </b-select>
      </b-field>

      <autocomplete
        label="Taggeie seu tópico - 1° tag"
        @select="setSelected"/>
      <autocomplete
        label="Taggeie seu tópico - 2° tag"
        @select="setSelected"/>
      <autocomplete
        label="Taggeie seu tópico - 3° tag"
        @select="setSelected"/>

      <button
        class="button is-success is-medium"
        :disabled="!isFormValid"> Criar tópico </button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .create-topic {
    padding: 20px;
  }

  hr {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .app-form {
    max-width: 600px;
    margin: 0 auto;
  }
</style>
