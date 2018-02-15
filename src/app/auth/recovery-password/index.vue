<script>
import { isEmpty } from 'lodash'

import LogoGlasses from '@/components/logo-glasses.vue'
import OfflineAlert from '@/support/mixins/offline-alert'
import mutation from '@/domains/user/services/mutations/reset-password-confirm.gql'

export default {
  name: 'recovery-password-page',
  components: { LogoGlasses },
  mixins: [ OfflineAlert ],
  data () {
    return {
      password: '',
      password_again: '',
      token: ''
    }
  },
  computed: {
    isValid () {
      return (!isEmpty(this.password_again) && !isEmpty(this.password)) &&
        this.password === this.password_again
    }
  },
  methods: {
    login () {
      if (this.isValid) {
        const loading = this.$loading.open()
        const password = this.password
        const password_again = this.password_again // eslint-disable-line
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
            this.$snackbar.open({
              message: 'Sua senha foi resetada com sucesso, clique em ok para ir a tela de login',
              type: 'is-success',
              position: 'is-top',
              actionText: 'Ok',
              onAction: () => {
                this.$router.push('/auth/login')
                this.password = ''
                this.password_again = ''
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
          .then(() => {
            loading.close()
          })
      }
    },
    openModal () {
      this.$refs.modal.open()
    }
  },
  mounted () {
    const body = document.body
    body.classList.add('login')
    this.token = this.$route.query.token
  },
  beforeDestroy () {
    const body = document.body
    body.classList.remove('login')
  }
}
</script>

<template>
  <div class="container">
    <div class="notification offline is-warning" v-if="!online">
      Ops, você está sem conexão
    </div>
    <logo-glasses />
    <section class="form-section">
      <h1 class="title is-3 has-text-centered"> Resetar senha </h1>

      <hr>
      <form @submit.prevent="login">
        <b-field>
          <b-input
            placeholder="Nova senha"
            icon="key"
            size="is-medium"
            type="password"
            ref="inputEmail"
            v-model="password"></b-input>
        </b-field>

        <b-field>
          <b-input
            placeholder="Repita a nova senha"
            icon="key"
            size="is-medium"
            type="password"
            v-model="password_again"></b-input>
        </b-field>

        <button
          class="button is-success is-medium is-outlined is-fullwidth"
          :disabled="!isValid">
          Resetar senha </button>
      </form>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../assets/sass/extend.sass";

  .container {
    padding-top: $space * 2;

    .image {
      max-width: 150px;
      margin: $space auto;
    }
  }

  .form-section {
    max-width: 450px;
    margin: 0 auto;
    padding: $space;
    background-color: $white;
    border-radius: 2px;
    box-shadow: 0px 0px 6px 0px #363636;
  }

  form {
    margin: $space / 2 0;
  }
</style>
