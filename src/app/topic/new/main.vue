<script>
  import { isEmpty } from 'lodash'
  import { prop } from 'ramda'

  import FileComponent from '@/components/file-component.vue'
  import PositionsQuery from './positions.gql'
  import addTags from './add-tags/main'
  import submitForm from './submit-form'
  import * as FormComponents from '@/domains/topics/view/form-components'

  export default {
    name: 'create-topic',
    components: {
      addTags,
      FileComponent,
      ...FormComponents
    },
    data () {
      return {
        positions: [],
        id_position: '',
        content: '',
        title: '',
        selected: [],
        isActive: false,
        selectedTags: [],
        file: {},
        hasImageError: null,
        is_private: false
      }
    },
    apollo: {
      positions () {
        return {
          query: PositionsQuery
        }
      }
    },
    computed: {
      hasSelectedTags () {
        return !isEmpty(this.selectedTags)
      },
      isFormValid () {
        return !isEmpty(this.title) && !isEmpty(this.content) && !isEmpty(this.selectedTags)
      },
      tags () {
        return this.selectedTags.map(prop('uid'))
      },
      topic () {
        return {
          title: this.title,
          content: this.content,
          id_position: this.id_position,
          tag: this.tags,
          is_private: this.is_private
        }
      }
    },
    methods: {
      submit () {
        const loading = this.$loading.open()
        submitForm(this, this.file, this.topic)
          .then(user => {
            window.scrollTo(0, 0)
            loading.close()
            this.reset()
            this.$router.push('/app/dashboard')
          })
          .catch(err => {
            loading.close()
            this.reset()
            return err
          })
      },
      getSelects (tags) {
        this.selectedTags = [ ...tags ]
      },
      reset () {
        this.id_position = ''
        this.content = ''
        this.title = ''
        this.selectedTags = []
        this.files = []
      },
      onLoadFile (file) {
        this.file = file
      },
      onLoadImageError (hasImageError) {
        this.hasImageError = hasImageError
      }
    }
  }
</script>

<template lang="html">
  <div class="create-topic">
    <h1 class="title has-text-centered"> Criar tópico </h1>
    <hr>

    <div class="form">
      <form-title :title.sync="title" />

      <form-content :content.sync="content" />

      <file-component
        label="Selecione a imagem"
        message="Imagem requerida: 1000px por 400px"
        :widthAccepted="1000"
        :heightAccepted="400"
        :willCheck="true"
        @load-file="onLoadFile"
        @load-errors="onLoadImageError" />

      <b-field label="Selecione a dicotomia">
        <b-select
          v-model="id_position"
          expanded>
          <option
            v-for="position in positions"
            :key="position.id"
            :value="position.id">

            {{ position.positive }} | {{ position.negative }} </option>
        </b-select>
      </b-field>

      <b-field label="O tema é privado?" class="radio-button">
        <div class="radio-buttons">
          <b-radio-button v-model="is_private"
            :native-value="true"
            type="is-success">
            <b-icon icon="check"></b-icon>
            <span>Sim</span>
          </b-radio-button>

          <b-radio-button v-model="is_private"
              :native-value="false"
              type="is-danger">
              <b-icon icon="close"></b-icon>
              <span>Não</span>
          </b-radio-button>
        </div>
      </b-field>

      <b-field
        label="Tags selecionadas"
        v-if="hasSelectedTags">
        <b-taglist>
          <b-tag
            v-for="tag in selectedTags" :key="tag.uid"
            type="is-primary"
            size="is-medium"> {{ tag.label }} </b-tag>
        </b-taglist>
      </b-field>

      <button
        class="button is-medium"
        @click="isActive = true"> Selecionar tags </button>

      <hr>

      <add-tags
        :isActive.sync="isActive"
        @get-select="getSelects" />

      <button
        class="button is-success is-medium"
        :disabled="!isFormValid"
        @click="submit"> Criar tópico </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .create-topic {
    padding: 20px;
  }

  hr,
  .form {
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .upload.control {
    display: block;
    margin-bottom: 10px;
  }

  .tags {
    margin-bottom: 0;
  }

  .app-form {
    max-width: 600px;
    margin: 0 auto;
  }

  .label {
    display: block;
  }

  .radio-button {
    display: block;
  }

  .radio-buttons {
    display: flex;
  }
</style>
