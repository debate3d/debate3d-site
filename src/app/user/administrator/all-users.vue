<script>
  import userSearch from './user-search.gql'

  export default {
    name: 'user-list',
    apollo: {
      userSearch () {
        return {
          query: userSearch,
          variables () {
            return {
              email: this.email
            }
          }
        }
      }
    },
    data: () => ({
      userSearch: [ ],
      usersList: [ ],
      email: 'emanuel'
    }),
    watch: {
      usersList (newValue) {
        this.$emit('user-choose', newValue)
      }
    }
  }
</script>

<template>
  <div class="column is-6">
    <b-field
      label="Pesquise por um email">
      <b-input v-model="email"></b-input>
    </b-field>

    <div class="box-user" v-for="user in userSearch" :key="user.uid">
      <div class="field">
        <b-checkbox
          v-model="usersList"
          :native-value="user">
            {{ user.name }} - {{ user.email }}
          </b-checkbox>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .box-user {
    display: flex;
    align-items: center;

    p {
      margin: 0 10px;
    }
  }
</style>
