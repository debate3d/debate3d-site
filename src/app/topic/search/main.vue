<script>
  import { debounce, get } from 'lodash'

  import SearchTopicQuery from '@/domains/topics/services/querys/search-topic.gql'
  import RenderTopics from '@/components/render-topics/main.vue'

  export default {
    name: 'topic-search-view',
    data: () => ({
      title: '',
      topics: [ ]
    }),
    components: { RenderTopics },
    watch: {
      title: debounce(function () {
        this.$apollo.query({
          query: SearchTopicQuery,
          variables: {
            filter: {
              title: this.title
            }
          }
        })
          .then(result => {
            this.topics = get(result, 'data.topicSearch', [ ])
          })
      }, 500)
    }
  }
</script>

<template lang="html">
  <div class="topic-search">
    <h1 class="title"> Encontre o tema que procuras </h1>

    <b-field label="Digite um título de um tema">
      <b-input type="text" v-model="title" expanded></b-input>
    </b-field>

    <render-topics
      :topics="topics"
      successMessage="Tema(s) encontrados"
      errorMessage="Nenhum tema foi encontrado"
      :column="'is-4'" />
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/sass/extend.sass";

  .topic-search {
    padding: $space;

    .title {
      &:after {
        content: '';
        display: block;
        width: 20%;
        height: 2px;
        background-color: $color4;
        margin: 2px 0 0 5px;
      }
    }
  }
</style>
