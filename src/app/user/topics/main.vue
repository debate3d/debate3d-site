<script>
  import queryMyTopics from '@/domains/user/services/querys/my-topics.gql'
  import RenderTopics from '@/components/render-topics/main'
  import NegativeFace from '@/components/negative'
  import { paginationMixin } from '../helpers'

  export default {
    name: 'my-topics',
    mixins: [
      paginationMixin('me_topics', queryMyTopics)
    ],
    components: { RenderTopics, NegativeFace }
  }
</script>

<template lang="html">
  <div class="my-cards">
    <h1 class="title has-text-centered"> Meus temas </h1>
    <app-pagination
      v-if="hasPagination"
      :total="me_topics.count"
      :current.sync="page"/>
    <render-topics
      :topics="me_topics"
      successMessage=""
      errorMessage="Você não possui cards cadastros ainda"
      column="is-4"/>
    <negative-face
      v-if="me_topics.records.length === 0"
      message="Você não possui temas cadastrados ainda" />
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .my-cards {
    padding: $space;
  }
</style>
