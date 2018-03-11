<script>
import { isEmpty } from 'lodash'
import mutation from '@/domains/user/graphql/mutations/reset-password-confirm.gql'

export default {
  name: 'auth-recovery-password-form',
  data () {
    return {
      model: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    isInvalid () {
      return this.isModelEmpty || !this.isSamePassword
    },
    isModelEmpty () {
      return isEmpty(this.model.password_again) || isEmpty(this.model.password)
    },
    isSamePassword () {
      return this.model.password_again === this.model.password
    }
  },
  methods: {
    save (event) {
      event.preventDefault()
      event.stopPropagation()
      this.$q.loading.show()
      const password = this.model.password
      const password_again = this.model.password_again // eslint-disable-line
      const token = this.token
      const data = {
        password,
        password_again,
        token
      }
      this.$apollo.mutate({
        mutation,
        variables: {
          data
        }
      })
        .then(() => {
          return this.$q.notify({
            message: 'Sua senha foi resetada com sucesso, clique em ok para ir a tela de login',
            type: 'positive',
            actions: [
              {
                label: 'Ok',
                handler: () => {
                  this.$router.push({ name: 'auth.login' })
                  this.model.password = ''
                  this.model.password_again = ''
                }
              }
            ]
          })
        })
        .catch(err => {
          return this.$q.notify({
            message: err.message,
            type: 'negative'
          })
        })
        .then(() => {
          this.$q.loading.hide()
        })
    },
    reset () {
      this.model = {
        email: '',
        password: ''
      }
    }
  },
  mounted () {
    this.token = this.$route.query.token
  }
}
</script>

<template>
  <form action="#">
    <q-field>
      <q-input
        float-label="Nova senha"
        type="password"
        v-model="model.password"></q-input>
    </q-field>

    <br>

    <q-field>
      <q-input
        float-label="Repita a nova senha"
        type="password"
        v-model="model.password_again"></q-input>
    </q-field>

    <br>

    <q-btn
      flat
      class="full-width"
      @click="save"
      :disabled="isInvalid">
      Resetar senha
    </q-btn>
  </form>
</template>

<style>

</style>
