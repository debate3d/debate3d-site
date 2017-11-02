<script>
  import AppUpdateUser from '@/domains/user/view/app-update-user'
  import submitForm from '../../user/update/submit-form'

  export default {
    name: 'register-finish',
    components: { AppUpdateUser },
    data: () => ({
      user: { }
    }),
    methods: {
      onSubmit () {
        const loading = this.$loading.open()
        submitForm(this)
          .then(() => {
            loading.close()
            this.$router.push('/dashboard')
          })
          .catch(() => {
            loading.close()
          })
      }
    }
  }
</script>

<template>
  <div class="register-finish">
    <h1 class="title has-text-centered">
      Só mais algumas informações
    </h1>

    <p> É importante para nós as informações abaixo. Não se preocupe, <span class="has-text-weight-bold">materemos sigilo sobre seu CPF</span>. Os dados das redes sociais são interessantes para que as outras pessoas em nossa plataforma possam te encontrar no Twitter, Facebook... </p>
    <p> Por fim, é importante ter um avatar. Escolha o seu! </p>

    <app-update-user
      :user.sync="user"
      btnLabel="Terminar cadastro"
      @app:submit="onSubmit" />
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .register-finish {
    padding: $space;
    margin: 0 auto;

    p {
      margin: $space / 4;
    }
  }
</style>
