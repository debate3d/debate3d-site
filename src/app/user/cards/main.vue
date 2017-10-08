<script>
  import queryMyCards from '@/domains/user/services/querys/my-cards.gql'
  import { mapGetters } from 'vuex'
  import RenderCards from '@/components/render-cards/main'

  export default {
    name: 'my-cards',
    components: { RenderCards },
    data () {
      return {
        user: {
          cards: {
            count: 0,
            records: []
          }
        }
      }
    },
    computed: {
      ...mapGetters({
        'getUser': 'getUser'
      }),
      cards () {
        return this.user.cards
      }
    },
    apollo: {
      user () {
        return {
          query: queryMyCards,
          variables () {
            return {
              uid: this.getUser.uid,
              page: 1
            }
          },
          fetchPolicy: 'network-only'
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="my-cards">
    <h1 class="title has-text-centered"> Meus cards </h1>
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
