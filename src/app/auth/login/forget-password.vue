<script>
  import { isEmpty } from 'lodash'
  import mutation from '@/domains/user/services/mutations/reset-password.gql'

  export default {
    name: 'forget-password',
    data: () => ({
      email: '',
      modalState: false
    }),
    methods: {
      open () {
        this.modalState = true
      },
      resetPassword () {
        if (isEmpty(this.email)) return
        this.$apollo.mutate({
          mutation,
          variables: {
            data: { email: this.email }
          }
        })
          .then(() => {
            this.$snackbar.open({
              message: 'Email enviado com sucesso. Verifique sua caixa de entrada',
              type: 'is-success',
              position: 'is-top',
              actionText: 'Ok',
              onAction: () => {
                this.email = ''
              }
            })
          })
          .catch(err => {
            this.$snackbar.open({
              message: err.message,
              type: 'is-danger',
              position: 'is-top',
              actionText: 'Ok'
            })
          })
      }
    }
  }
</script>

<template lang="html">
  <b-modal :active.sync="modalState">
    <div class="box">
      <h1 class="title"> Entre com seu e-mail </h1>
      <b-field>
        <b-input type="email" v-model="email" placeholder="Digite seu email" />
      </b-field>
      <button class="button is-primary" @click="resetPassword"> Enviar e-mail </button>
    </div>
  </b-modal>
</template>

<style lang="css">
</style>
