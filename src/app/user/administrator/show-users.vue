<script>
  import BoxUser from '@/domains/user/view/box-user'
  import update from './update-mutation'

  export default {
    name: 'show-users',
    components: {
      BoxUser
    },
    props: {
      userChoose: {
        type: Array,
        required: true
      }
    },
    data: () => ({
      subscriber: true
    }),
    computed: {
      hasUsersChoose () {
        return this.userChoose.length > 0
      }
    },
    methods: {
      update () {
        const loading = this.$loading.open()
        update(this, loading)
      }
    }
  }
</script>

<template>
  <div class="column is-6">
    <b-field
      v-if="hasUsersChoose"
      label="Tornar usuário(s)">
      <b-radio
        v-model="subscriber" :native-value="true"> Assinante </b-radio>
      <b-radio
        v-model="subscriber" :native-value="false"> Não assinante </b-radio>
    </b-field>

    <box-user
      v-for="user in userChoose" :key="user.uid"
      :user="user" />

    <button
      class="button is-info"
      @click="update"
      v-if="hasUsersChoose"> Atualizar usuários </button>

    <p
      class="is-size-4"
      v-if="!hasUsersChoose"> Não há usuario selecionado </p>
  </div>
</template>

<style lang="scss" scoped>
  .field {
    align-items: baseline;

    .radio {
      margin: 0 5px;
    }
  }
</style>
