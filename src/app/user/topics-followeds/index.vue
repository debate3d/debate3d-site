<script>
  import { mapGetters } from 'vuex'
  import query from '@/domains/user/services/querys/topics-followed.gql'
  import RenderTopics from '@/components/render-topics/main'
  import { apolloLoadingMixin } from '@/support/mixins'

  export default {
    name: 'my-topics-followeds',
    mixins: [
      apolloLoadingMixin(query, 'topicsFollowed', [], 'data.user.topics_followed')
    ],
    components: { RenderTopics },
    computed: {
      ...mapGetters({
        user: 'getUser'
      }),
      apolloVariables () {
        const uid = this.user.uid || ''

        return {
          uid
        }
      },
      topics () {
        const records = this.topicsFollowed.map(topic => topic.topic || {})
        return {
          count: 1,
          records
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="my-topics-followeds">
    <h1 class="title has-text-centered"> Temas que estou seguindo </h1>
    <render-topics
      :topics="topics"
      successMessage=""
      column="is-4"/>
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .my-topics-followeds {
    padding: $space;
  }
</style>
