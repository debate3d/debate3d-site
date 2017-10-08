<script>
  import RenderCards from '@/components/render-cards/main'
  import RenderTopics from '@/components/render-topics/main'
  import { schemaSingleUser } from '@/domains/user/schemas'
  import querySingleUser from '@/domains/user/services/querys/single-user.gql'
  import { refreshQueryMixin } from '@/mixins'
  import AppAvatar from '@/components/avatar.vue'
  import SharedList from '@/domains/user/view/shared-list'

  export default {
    name: 'user-view',
    components: { RenderTopics, RenderCards, AppAvatar, SharedList },
    mixins: [ refreshQueryMixin('user') ],
    data () {
      return {
        user: schemaSingleUser
      }
    },
    computed: {
      created () {
        return this.user.created
      }
    },
    apollo: {
      user () {
        return {
          query: querySingleUser,
          variables () {
            return {
              uid: this.$route.params.user
            }
          },
          fetchPolicy: 'network-only'
        }
      }
    }
  }
</script>

<template lang="html">
  <div class="user-view">
    <div class="user-view__header">
      <app-avatar
        :number="user.avatar_id"
        :length="100"></app-avatar>
      <h1 class="title has-text-centered"> {{ user.name }} </h1>
      <p class="subtitle has-text-centered"> Email: {{ user.email }} </p>
      <p class="subtitle has-text-centered"> Membro desde {{ created }} </p>
      <p class="subtitle has-text-centered"> Pontos: {{ user.ponts }} </p>
    </div>
    <shared-list :user="user" />
    <div class="user-view__topics" v-if="user.topics.records.length > 0">
      <h2 class="title is-4 has-text-centered"> Temas do usuário </h2>
      <render-topics
        :topics="user.topics"
        column="is-6"/>
    </div>
    <div class="user-view__cards" v-if="user.cards.records.length > 0">
      <h2 class="title is-4 has-text-centered"> Cards do usuário </h2>
      <render-cards
        :cards="user.cards"
        column="is-6"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import '../../../assets/sass/extend.sass';

  .user-view {
    max-width: 800px;
    margin: $space auto;

    .title:not(.is-spaced) + .subtitle {
      margin-top: 0;
    }

    .avatar {
      margin: 0 auto;
      display: block;
    }

    &__header {
      padding: 0 0 1em 0;
      border-bottom: 1px solid #bbb;

      .subtitle:first-child {
        margin-top: $space;
      }

      .subtitle:last-child {
        font-weight: 500;
      }
    }

    &__topics {
      margin: $space 0;
    }

    &__cards {
      margin: $space 0;
    }
  }
</style>
