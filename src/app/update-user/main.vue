<script>
  import { isEmpty, pick, defaultsDeep } from 'lodash'
  import submitForm from './submit-form'
  import MaskedInput from 'vue-masked-input'

  export default {
    components: { MaskedInput },
    computed: {
      btnDisabled () {
        return isEmpty(this.user.name)
      }
    },
    data () {
      return {
        user: {}
      }
    },
    methods: {
      update () {
        submitForm(this)
          .then(result => {
            this.$snackbar.open('Dados atualizados')
            const user = result.data.UpdateUser
            const storeUser = this.$store.state.auth.user
            const merged = defaultsDeep({ }, user, storeUser)
            this.$store.dispatch('setUser', merged)
          })
          .catch(err => {
            console.error(err)
            this.$snackbar.open({
              message: 'Não foi possível atualizar os dados',
              type: 'is-warning'
            })
          })
      }
    },
    mounted () {
      const props = [
        'name',
        'cpf',
        'cep',
        'facebook',
        'youtube',
        'twitter',
        'instagram',
        'site',
        'email'
      ]
      this.user = pick(this.$store.state.auth.user, props)
    }
  }
</script>

<template lang="html">
  <div class="update-user">
    <h1 class="title has-text-centered"> Atualizar usuário </h1>

    <div class="columns">
      <div class="column is-6">
        <div class="box">
          <h2 class="subtitle has-text-centered"> Dados principais </h2>

          <b-field>
            <b-input
              placeholder="Nome"
              type="text"
              size="is-medium"
              v-model="user.name"
              icon="user"
              expanded></b-input>
          </b-field>

          <b-field>
            <b-input
              placeholder="Email"
              type="email"
              size="is-medium"
              v-model="user.email"
              expanded
              icon="envelope-o"
              disabled="true"></b-input>
          </b-field>

          <b-field>
            <p class="control has-icons-left has-icons-right">
              <masked-input
                v-model="user.cpf"
                class="input is-medium"
                @input="user.cpf = arguments[1]"
                mask="111.111.111.11"
                placeholder="000.000.000.00" />
              <span class="icon is-small is-left">
                <i class="fa fa-sticky-note"></i>
              </span>
            </p>
          </b-field>

          <b-field>
            <p class="control has-icons-left has-icons-right">
              <masked-input
                v-model="user.cep"
                class="input is-medium"
                @input="user.cep = arguments[1]"
                mask="11111-111"
                placeholder="00000-000" />
              <span class="icon is-small is-left">
                <i class="fa fa-sticky-note"></i>
              </span>
            </p>
          </b-field>
        </div>
      </div>
      <div class="column is-6">
        <div class="box">
          <h2 class="subtitle has-text-centered"> Redes Sociais </h2>

          <b-field>
            <b-input
              placeholder="Facebook"
              type="url"
              size="is-medium"
              icon="facebook"
              v-model="user.facebook"
              expanded></b-input>
          </b-field>

          <b-field>
            <b-input
              placeholder="Youtube"
              type="url"
              size="is-medium"
              icon="youtube"
              v-model="user.youtube"
              expanded></b-input>
          </b-field>

          <b-field>
            <b-input
              placeholder="Twitter"
              type="url"
              size="is-medium"
              icon="twitter"
              v-model="user.twitter"
              expanded></b-input>
          </b-field>

          <b-field>
            <b-input
              placeholder="Instagram"
              type="url"
              size="is-medium"
              icon="instagram"
              v-model="user.instagram"
              expanded></b-input>
          </b-field>

          <b-field>
            <b-input
              placeholder="Seu site"
              type="url"
              size="is-medium"
              icon="link"
              v-model="user.site"
              expanded></b-input>
          </b-field>

          <button
            class="button is-info"
            :disabled="btnDisabled"
            @click="update"> Atualizar dados </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../assets/sass/_extend";

  .update-user {
    padding: $space;

    .field {
      width: 100%;
    }
  }
</style>
