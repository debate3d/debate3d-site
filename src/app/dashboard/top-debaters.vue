<script>
  import debatersQuery from '../../domains/user/services/querys/debaters.gql'
  import AppUser from '../../components/box-user.vue'
  import { isEmpty } from 'lodash'
  import { schemaUserBox } from '../../domains/user/schemas'

  export default {
    components: { AppUser },
    computed: {
      allUsers () {
        const debatersSchema = [
          schemaUserBox,
          schemaUserBox,
          schemaUserBox,
          schemaUserBox,
          schemaUserBox
        ]
        return (isEmpty(this.debaters.records)) ? debatersSchema : this.debaters.records.slice(0, 5)
      }
    },
    data () {
      return {
        debaters: {}
      }
    },
    apollo: {
      debaters: {
        query: debatersQuery,
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
  <section class="debaters-info">
    <h2 class="title is-4"> Top Debatedores </h2>
    <app-user v-for="(user, index) in allUsers" :user="user" :position="index + 1"></app-user>
  </section>
</template>

<style scoped lang="scss">
  @import "../../assets/sass/_extend";

  .debaters-info {
    flex-grow: 1;

    @media (min-width: 769px) {
      margin-right: $space / 2;
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
