<script>
  import queryMyCards from '@/domains/user/services/querys/my-cards.gql'
  import RenderCards from '@/components/render-cards/main'
  import { paginationMixin } from '../helpers'
  import { loadingMixin } from '@/mixins'

  export default {
    name: 'my-cards',
    mixins: [ paginationMixin('cards', queryMyCards), loadingMixin('cards') ],
    components: { RenderCards }
  }
</script>

<template lang="html">
  <div class="my-cards">
    <h1 class="title has-text-centered"> Meus cards </h1>
    <app-pagination
      v-if="hasPagination"
      :total="cards.count"
      :current.sync="page"/>
    <render-cards
      :cards="cards"
      successMessage=""
      errorMessage="Você não possui cards cadastros ainda"
      column="is-4"/>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .my-cards {
    padding: $space;
  }
</style>
