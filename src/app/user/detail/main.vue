<script>
  import RenderCards from '@/components/render-cards/main'
  import RenderTopics from '@/components/render-topics/main'
  import { schemaSingleUser } from '@/domains/user/schemas'
  import querySingleUser from '@/domains/user/services/querys/single-user.gql'
  import { refreshQueryMixin } from '@/mixins'
  import AppAvatar from '@/components/avatar.vue'
  import SharedList from '@/domains/user/view/shared-list'
  import UserStats from '@/domains/user/view/user-stats/main.vue'

  export default {
    name: 'user-view',
    components: { RenderTopics, RenderCards, AppAvatar, SharedList, UserStats },
    mixins: [ refreshQueryMixin('user') ],
    data () {
      return {
        user: schemaSingleUser,
        showPonts: false,
        showCards: false,
        showTopics: false
      }
    },
    computed: {
      created () {
        return this.user.created
      },
      textButtonPonts () {
        return this.showPonts ? 'Esconder pontos' : 'Visualizar pontos'
      },
      textButtonCards () {
        return this.showCards ? 'Esconder cards' : 'Visualizar cards'
      },
      textButtonTopics () {
        return this.showTopics ? 'Esconder temas' : 'Visualizar temas'
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
      <p class="subtitle has-text-centered"> Pontos: {{ user.ponts }} </p>
      <p class="subtitle has-text-centered"> Membro desde {{ created }} </p>
      <hr>
      <shared-list :user="user" />
    </div>
    <div class="user__ponts">
      <button
        type="button" name="button" class="button"
        @click="showPonts = !showPonts">
        {{ textButtonPonts }}
      </button>
      <user-stats :uid="user.uid" v-if="showPonts"/>
    </div>
    <div
      class="user-view__topics"
      v-if="user.topics.records.length > 0">

      <button
        class="button"
        @click="showTopics = !showTopics"> {{ textButtonTopics }} </button>
      <h2
        class="title is-4 has-text-centered"
        v-if="showTopics"> Temas do usuário </h2>
      <render-topics
        v-if="showTopics"
        :topics="user.topics"
        column="is-6"/>
    </div>

    <div
      class="user-view__cards"
      v-if="user.cards.records.length > 0">
      <button
        class="button"
        @click="showCards = !showCards"> {{ textButtonCards }} </button>
      <h2
        class="title is-4 has-text-centered"
        v-if="showCards"> Cards do usuário </h2>
      <render-cards
        v-if="showCards"
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

    .button {
      margin-bottom: 10px;
    }

    .title:not(.is-spaced) + .subtitle {
      margin-top: 0;
    }

    .avatar {
      margin: 0 auto;
      display: block;
    }

    &__header {
      padding: 0 0 1em 0;

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
