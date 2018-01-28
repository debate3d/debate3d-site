<script>
  import { isEmpty } from 'lodash'
  import query from '@/domains/topics/services/querys/single-topic.gql'
  import { schemaTopicView } from '@/domains/topics/schemas'
  import { apolloLoadingMixin, refreshQueryMixin } from '@/support/mixins'
  import FileComponent from '@/components/file-component.vue'
  import * as FormComponents from '@/domains/topics/view/form-components'
  import submitForm from './submit-form'

  const fn = (context, topic) => {
    context.topic = { ...topic }
    context.isLoading = false
    context.title = topic.title
    context.content = topic.content
    context.url_image = topic.url_image
  }

  export default {
    components: {
      FileComponent,
      ...FormComponents
    },
    mixins: [
      refreshQueryMixin('topic'),
      apolloLoadingMixin(query, 'topic', schemaTopicView, 'data.topic', fn)
    ],
    data () {
      return {
        page: 1,
        isLoading: true,
        title: '',
        content: '',
        url_image: '',
        file: {},
        hasImageError: false
      }
    },
    computed: {
      isFormValid () {
        return !isEmpty(this.title) && !isEmpty(this.content) && !this.hasImageError
      },
      hasImage () {
        return !isEmpty(this.url_image)
      },
      model () {
        return {
          uid: this.topic.uid,
          content: this.content
        }
      },
      apolloVariables () {
        return {
          nickname: this.$route.params.topic,
          page: this.page
        }
      }
    },
    methods: {
      onLoadFile (file) {
        this.file = file
      },
      onLoadImageError (hasImageError) {
        this.hasImageError = hasImageError
      },
      submit () {
        const loading = this.$loading.open()
        submitForm(this, this.file, this.model)
          .then(user => {
            loading.close()
            window.scrollTo(0, 0)
            this.$router.push(`/topic/${this.topic.nickname}/detail`)
          })
          .catch(console.error)
      }
    }
  }
</script>

<template lang="html">
  <div class="topic-edit">
    <h1 class="title has-text-centered"> Edite seu tema </h1>

    <section>
      <form-title :title.sync="title" disable />

      <form-content :content.sync="content" />

      <template v-if="hasImage">
        <p class="caption"> Imagem cadastrada </p>
        <figure class="image">
          <img :src="url_image">
        </figure>
      </template>

      <p class="subtitle" v-if="!hasImage"> Não possui imagem cadastrada </p>

      <file-component
        label="Selecione a imagem"
        message="Imagem requerida: 1000px por 400px"
        :widthAccepted="1000"
        :heightAccepted="400"
        :willCheck="true"
        @load-file="onLoadFile"
        @load-errors="onLoadImageError" />

      <button
        class="button is-success is-medium"
        :disabled="!isFormValid"
        @click="submit"> Editar </button>
    </section>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .topic-edit {
    padding: $space;
    max-width: 800px;
    margin: 0 auto;

    .caption,
    .image {
      margin-bottom: 5px;
    }
  }
</style>
