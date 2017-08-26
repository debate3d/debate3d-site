<script>
import Logo from '../../components/logo'
import { isEmpty } from 'lodash'
import { register, getUser } from '../../services/auth'
import { setUserStorage, setHasLogged, setToken } from '../../helpers'

export default {
  components: { Logo },
  data () {
    return {
      email: '',
      newPassword: '',
      password: ''
    }
  },
  computed: {
    isValid () {
      return !isEmpty(this.email) && !isEmpty(this.password) && !isEmpty(this.newPassword)
    },
    isEqualPwd () {
      return this.password === this.newPassword
    }
  },
  methods: {
    register () {
      if (this.isValid && this.isEqualPwd) {
        const loading = this.$loading.open()
        const email = this.email
        const password = this.password
        const payload = {
          email,
          password
        }
        register(payload)
          .then(response => {
            const { token } = response.data
            if (!isEmpty(token)) {
              setToken(token)
              getUser(token)
                .then(response => {
                  const value = response.data.data
                  loading.close()
                  setUserStorage(value)
                  setHasLogged(true)
                  this.$store.dispatch('setUser', value)
                  this.$router.push('/dashboard')
                })
              return
            }
          })
          .catch(error => {
            loading.close()
            this.$snackbar.open({
              message: 'Dados inconsistentes',
              type: 'is-danger',
              position: 'is-top-left',
              actionText: 'Ok',
              onAction: () => {
                this.email = ''
                this.password = ''
                this.newPassword = ''
                this.$refs.inputEmail.focus()
              }
            })
            console.log(error)
          })
      }
    }
  },
  mounted () {
    const body = document.body
    body.classList.add('register')
  },
  beforeDestroy () {
    const body = document.body
    body.classList.remove('register')
  }
}
</script>

<template>
  <div class="container">
    <logo />
    <section class="form-section">
      <h1 class="title is-3 has-text-centered"> Login </h1>
      <a class="button is-info is-fullwidth is-medium is-outlined"
        @click.prevent="facebook">
        <span class="icon">
          <i class="fa fa-facebook-official"></i>
        </span>
        <span>Login com o Facebook</span>
      </a>

      <hr>

      <form @submit.prevent="register">
        <b-field>
          <b-input
            placeholder="Email"
            icon="envelope"
            size="is-medium"
            type="text"
            ref="inputEmail"
            v-model="email"></b-input>
        </b-field>

        <b-field>
          <b-input
            placeholder="Senha"
            icon="key"
            size="is-medium"
            type="password"
            v-model="password"></b-input>
        </b-field>

        <b-field>
          <b-input
            placeholder="Repita a senha"
            icon="key"
            size="is-medium"
            type="password"
            v-model="newPassword"></b-input>
        </b-field>

        <button class="button is-success is-medium is-outlined is-fullwidth"> Cadastre-se </button>
      </form>

      <p> Já possui uma conta? <router-link to="/login"> Acesse </router-link> </p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/sass/extend.sass";

  .container {
    padding-top: $space * 2;
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
