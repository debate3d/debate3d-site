<script>
import { isEmpty } from 'lodash'
import { NicknameInput } from '@/domains/user/view'
import register from './register'

export default {
  name: 'auth-register-form',
  components: { NicknameInput },
  data () {
    return {
      nicknameValid: false,
      model: {
        email: '',
        nickname: '',
        password: '',
        password_again: ''
      }
    }
  },
  computed: {
    isInvalid () {
      return this.isModelEmpty && !this.isEqualPwd && !this.nicknameValid
    },
    isModelEmpty () {
      return Object.values(this.model).some(isEmpty)
    },
    isEqualPwd () {
      return (this.model.password === this.model.password_again) || !this.isModelEmpty
    }
  },
  methods: {
    save (event) {
      event.preventDefault()
      event.stopPropagation()
      this.$q.loading.show()

      return register(this, this.model)
        .then(() => {
          this.$q.loading.hide()
        })
    },
    reset () {
      this.model = {
        email: '',
        nickname: '',
        password: '',
        password_again: ''
      }
    }
  }
}
</script>

<template>
  <form action="#">
    <nickname-input
      v-model="model.nickname" :nicknameValid.sync="nicknameValid" />

    <br>

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

    <br>

    <q-field>
      <q-input
        type="password"
        v-model="model.password_again"
        float-label="Repita sua senha" />
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
