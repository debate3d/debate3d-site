<script>
  import queryMyTopics from '@/domains/user/services/querys/my-topics.gql'
  import { mapGetters } from 'vuex'
  import RenderTopics from '@/components/render-topics/main'
  import NegativeFace from '@/components/negative'

  export default {
    name: 'my-cards',
    components: { RenderTopics, NegativeFace },
    data () {
      return {
        user: {
          topics: {
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
      topics () {
        return this.user.topics
      }
    },
    apollo: {
      user () {
        return {
          query: queryMyTopics,
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
    <h1 class="title has-text-centered"> Meus temas </h1>
    <render-topics
      :topics="topics"
      successMessage=""
      errorMessage="Você não possui cards cadastros ainda"
      column="is-4"/>
    <negative-face
      v-if="topics.records.length === 0"
      message="Você não possui temas cadastrados ainda" />
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .my-cards {
    padding: $space;
  }
</style>
