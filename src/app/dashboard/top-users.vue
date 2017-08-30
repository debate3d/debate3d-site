<script>
  import usersQuery from '../../domains/user/services/querys/users.gql'
  import AppUser from '../../components/box-user.vue'
  import { isEmpty } from 'lodash'

  export default {
    components: { AppUser },
    computed: {
      allUsers () {
        return (isEmpty(this.users.records)) ? [] : this.users.records.slice(0, 5)
      }
    },
    data () {
      return {
        users: {}
      }
    },
    apollo: {
      users: {
        query: usersQuery,
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
  <section class="user-info">
    <h2 class="title is-4"> Usuários em destaque </h2>
    <app-user v-for="(user, key) in allUsers" :user="user" :position="key + 1"></app-user>
  </section>
</template>

<style scoped lang="scss">
  @import "../../assets/sass/_extend";

  .user-info {
    display: block;
    padding: $space  - 5px;

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

    @media (min-width: 1023px) {
      width: 50%;
    }

    @media (max-width: 1022px) {
      width: 100%;
    }
  }
</style>
