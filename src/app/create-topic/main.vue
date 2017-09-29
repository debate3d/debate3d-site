<script>
  import { isEmpty } from 'lodash'
  import { prop } from 'ramda'
  import PositionsQuery from './positions.gql'
  import createTopicMutation from './create-topic-mutation.gql'
  import addTags from './add-tags/main'

  export default {
    name: 'create-topic',
    components: { addTags },
    data () {
      return {
        positions: [],
        id_position: '',
        content: '',
        title: '',
        selected: [],
        isActive: false,
        selectedTags: []
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
        this.$apollo.mutate({
          mutation: createTopicMutation,
          variables: {
            topic: this.topic
          }
        }).then(console.log).catch(console.error)
      },
      getSelects (tags) {
        this.selectedTags = [ ...tags ]
      }
    },
    computed: {
      isFormValid () {
        return !isEmpty(this.content) && !isEmpty(this.id_position) && !isEmpty(this.title)
      },
      tags () {
        return this.selectedTags.map(prop('uid'))
      },
      topic () {
        return {
          title: this.title,
          content: this.content,
          id_position: this.id_position,
          tag: this.selectedTags
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="create-topic">
    <h1 class="title has-text-centered"> Criar tópico </h1>
    <hr>

    <b-field
      label="Título">
      <b-input
        maxlength="45"
        placeholder="Digite um titulo"
        v-model="title"
        type="text"/>
    </b-field>

    <b-field
      label="Conteúdo">
      <b-input maxlength="2000" type="textarea" v-model="content"></b-input>
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

    <b-field
      label="Tags selecionadas">
      <b-taglist v-if="selectedTags.length > 0">
        <b-tag
          v-for="tag in selectedTags" :key="tag.uid"
          type="is-primary"
          size="is-medium"> {{ tag.label }} </b-tag>
      </b-taglist>
    </b-field>

    <hr>

    <button
      class="button is-medium"
      @click="isActive = true"> Adicionar tags </button>

    <add-tags
      :isActive.sync="isActive"
      @get-select="getSelects" />

    <button
      class="button is-success is-medium"
      :disabled="!isFormValid"
      @click="submit"> Criar tópico </button>
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
