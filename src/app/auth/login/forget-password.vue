<script>
import { isEmpty } from 'lodash'
import mutation from '@/domains/user/graphql/mutations/reset-password.gql'
import AppModal from '@/components/app-modal.vue'
import { modalConfigMixin } from '@/support/mixins'
const contentCss = {
  'min-width': '400px',
  'min-height': '200px'
}

export default {
  name: 'forget-password',
  mixins: [ modalConfigMixin('modal', contentCss) ],
  components: { AppModal },
  data: () => ({
    model: {
      email: ''
    }
  }),
  methods: {
    resetPassword () {
      const { email } = this.model
      if (isEmpty(email)) return
      this.$apollo.mutate({
        mutation,
        variables: {
          data: { email }
        }
      })
        .then(() => {
          this.$q.notify({
            message: 'Email enviado com sucesso. Verifique sua caixa de entrada',
            type: 'positive',
            actions: [
              {
                label: 'Ok',
                handler: () => {
                  this.model.email = ''
                }
              }
            ]
          })
        })
        .catch(err => {
          this.$q.notify({
            message: err.message,
            type: 'negative'
          })
        })
    }
  }
}
</script>

<template lang="html">
  <app-modal ref="modal" :contentCss="contentCss" title="Mude sua senha">
    <q-field>
      <q-input type="email" v-model="model.email" float-label="Digite seu email" />
    </q-field>

    <br>

    <q-btn flat @click="resetPassword" color="primary"> Enviar email </q-btn>
  </app-modal>
</template>

<style lang="css">
</style>
