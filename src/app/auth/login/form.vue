<script>
import { isEmpty } from 'lodash'
import login from './login'

export default {
  name: 'auth-login-form',
  data () {
    return {
      model: {
        email: null,
        password: null
      }
    }
  },
  computed: {
    isInvalid () {
      return isEmpty(this.model.email) || isEmpty(this.model.password)
    }
  },
  methods: {
    save (event) {
      event.preventDefault()
      event.stopPropagation()

      return login(this, this.model)
    }
  }
}
</script>

<template>
  <form action="#">
    <q-field>
      <q-input
        v-model="model.email"
        float-label="Email" />
    </q-field>

    <br>

    <q-field>
      <q-input
        type="password"
        v-model="model.password"
        float-label="Senha" />
    </q-field>

    <br />

    <q-btn :disable="isInvalid" @click="save" label="Entrar" flat />
  </form>
</template>

<style>

</style>
