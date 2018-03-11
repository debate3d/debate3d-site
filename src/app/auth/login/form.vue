<script>
import { isEmpty } from 'lodash'
import login from './login'
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'auth-login-form',
  mixins: [ validationMixin ],
  validations: {
    model: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
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

    <q-btn
      flat
      class="full-width"
      :disable="isInvalid"
      label="Entrar"
      color="primary"
      @click="save" />
  </form>
</template>

<style>

</style>
