<script>
  import moderatorsQuery from '@/domains/user/services/querys/moderators.gql'
  import { boxUser } from '@/domains/user/view'
  import { isEmpty } from 'lodash'
  import { schemaUserBox } from '@/domains/user/schemas'

  export default {
    components: { boxUser },
    computed: {
      allUsers () {
        const moderatorSchema = [
          schemaUserBox,
          schemaUserBox,
          schemaUserBox,
          schemaUserBox,
          schemaUserBox
        ]
        return (isEmpty(this.moderators.records)) ? moderatorSchema : this.moderators.records.slice(0, 5)
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
    <box-user
      v-for="(user, index) in allUsers"
      :user="user"
      :key="index"
      :position="index + 1"></box-user>
  </section>
</template>

<style scoped lang="scss">
  @import "../../assets/sass/extend.sass";

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
