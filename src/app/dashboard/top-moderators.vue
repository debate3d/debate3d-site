<script>
  import moderatorsQuery from '../../domains/user/services/querys/moderators.gql'
  import AppUser from '../../components/box-user.vue'
  import { isEmpty } from 'lodash'

  export default {
    components: { AppUser },
    computed: {
      allUsers () {
        return (isEmpty(this.moderators.records)) ? [] : this.moderators.records.slice(0, 5)
      }
    },
    data () {
      return {
        moderators: {}
      }
    },
    apollo: {
      moderators: {
        query: moderatorsQuery,
        variables () {
          return {
            page: 1
          }
        }
      }
    }
  }
</script>

<template lang="html">
  <section class="moderators-info">
    <h2 class="title is-4"> Top Moderadores </h2>
    <app-user v-for="(user, key) in allUsers" :user="user" :position="key + 1"></app-user>
  </section>
</template>

<style scoped lang="scss">
  @import "../../assets/sass/_extend";

  .moderators-info {
    flex-grow: 1;

    @media (min-width: 769px) {
      margin-left: $space / 2;
    }

    @media (max-width: 768px) {
      margin-top: $space;
    }

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
