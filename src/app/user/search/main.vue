<script>
  import { debounce, get, gt, isEmpty } from 'lodash'

  import SearchUserQuery from '@/domains/user/services/querys/search-user.gql'
  import BoxUser from '@/domains/user/view/box-user'

  export default {
    name: 'user-search-view',
    components: { BoxUser },
    data: () => ({
      nickname: '',
      users: {},
      isLoading: true
    }),
    computed: {
      hasUsers () {
        return gt(get(this.users, 'count', 0), 0)
      },
      records () {
        return get(this.users, 'records', []) || []
      }
    },
    watch: {
      nickname: debounce(function () {
        if (!isEmpty(this.nickname)) {
          this.$apollo.query({
            query: SearchUserQuery,
            variables: {
              filter: {
                nickname: this.nickname
              }
            }
          })
            .then(result => {
              this.users = get(result, 'data.userSearch', {})
              this.isLoading = false
            })
        }

        this.users = {}
        this.isLoading = true
      }, 500)
    }
  }
</script>

<template lang="html">
  <div class="user-search">
    <h1 class="title"> Encontre um usuário </h1>

    <b-field label="Digite um nickname">
      <b-input type="text" v-model="nickname" expanded></b-input>
    </b-field>

    <p
      class="subtitle"
      v-if="!hasUsers && !isLoading">
      Nenhum resultado encontrado
    </p>

    <div class="columns" v-if="hasUsers && !isLoading">
      <div
        class="column is-6"
        v-for="(user, index) in records">

        <box-user :user="user" :key="index" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/sass/extend.sass";

  .user-search {
    padding: $space;

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
