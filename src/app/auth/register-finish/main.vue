<script>
  import AppUpdateUser from '@/domains/user/view/app-update-user'
  import submitForm from '../../user/update/submit-form'
  import { getLastRoute } from '@/helpers'
  import OfflineAlert from '@/support/mixins/offline-alert'

  export default {
    name: 'register-finish',
    components: { AppUpdateUser },
    mixins: [ OfflineAlert ],
    data: () => ({
      user: { }
    }),
    methods: {
      onSubmit () {
        const loading = this.$loading.open()
        submitForm(this)
          .then(result => {
            loading.close()
            if (result) {
              const lastRoute = getLastRoute()
              const toRoute = lastRoute || '/app/dashboard'
              return this.$router.push(toRoute)
            }
          })
          .catch(() => {
            loading.close()
            return false
          })
      }
    }
  }
</script>

<template>
  <div class="register-finish">
    <div class="notification offline is-warning" v-if="!online">
      Ops, você está sem conexão
    </div>
    <h1 class="title has-text-centered">
      Só mais algumas informações
    </h1>

    <p> É importante para nós as informações abaixo para evitar perfis falsos. <span class="has-text-weight-bold"> Não se preocupe, materemos sigilo sobre seu CPF. </span> </p>

    <p> Os dados das redes sociais são interessantes para você que busca mais seguidores nas suas páginas ou perfis. </p>

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
