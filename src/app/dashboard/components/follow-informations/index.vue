<script>
  import { isEmpty } from 'lodash'
  import { mapGetters } from 'vuex'

  export default {
    name: 'dashboard-follow-informations',
    computed: {
      ...mapGetters({
        user: 'getUser',
        isLogged: 'getIsLogged'
      }),
      moderators () {
        return this.user.moderators_followed
      },
      hasModeratorFollowed () {
        return !isEmpty(this.moderators)
      },
      moderatorsSliced () {
        return this.slice(this.moderators)
      },
      topics () {
        return this.user.topics_followed
      },
      hasTopicsFollowed () {
        return !isEmpty(this.topics)
      },
      topicsSliced () {
        return this.slice(this.topics)
      }
    },
    methods: {
      slice (array) {
        return isEmpty(array) ? [] : array.slice(0, 3)
      }
    }
  }
</script>

<template lang="html">
  <div class="dashboard-follow-informations" v-if="isLogged">
    <h2 class="title is-4"> Temas e moderadores que você segue </h2>

    <div class="columns">
      <!-- TOPICS -->
      <div class="column is-6">
        <div
          class="box"
          v-for="({ moderator }, index) in moderatorsSliced"
          :key="index">
          <router-link
            :to="`/user/${moderator.nickname}/detail`"
            class="title is-5"> {{ moderator.name }} </router-link>
        </div>

        <router-link
          class="button is-outlined is-primary"
          to="/dashboard" v-if="hasModeratorFollowed"> Lista completa </router-link>

        <p v-else> Não há moderadores seguidos no momento </p>
      </div>

      <!-- MODERATORS -->
      <div class="column is-6">
        <div
          class="box"
          v-for="({ topic }, index) in topicsSliced"
          :key="index">
          <router-link
            :to="`/topic/${topic.nickname}/detail`"
            class="title is-5"> {{ topic.title }} </router-link>
        </div>

        <router-link
          class="button is-outlined is-primary"
          to="/dashboard" v-if="hasTopicsFollowed"> Lista completa </router-link>

        <p v-else> Não há tópicos seguidos no momento </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../../assets/sass/extend.sass";

  .dashboard-follow-informations {
    padding: $space;

    > .title {
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
