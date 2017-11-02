<script>
  import submitForm from './submit-form'
  import AppUpdateUser from '@/domains/user/view/app-update-user'

  export default {
    components: { AppUpdateUser },
    data () {
      return {
        user: { }
      }
    },
    methods: {
      onSubmit () {
        const loading = this.$loading.open()
        submitForm(this)
          .then(() => {
            loading.close()
          })
          .catch(() => {
            loading.close()
          })
      }
    }
  }
</script>

<template lang="html">
  <div class="update-user">
    <h1 class="title has-text-centered"> Atualizar usuário </h1>

    <app-update-user
      :user.sync="user"
      btnLabel="Atualizar dados"
      @app:submit="onSubmit" />
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/sass/extend.sass";

  .update-user {
    padding: $space;

    .field {
      width: 100%;
    }
  }
</style>
