<script>
  import { pick, isEmpty } from 'lodash'
  import { mapGetters } from 'vuex'

  import AppNickname from '@/domains/user/view/app-nickname'
  import AvatarContainer from '../../user/update/update-avatar/main.vue'
  import MaskedInput from 'vue-masked-input'
  import submitForm from '../../user/update/submit-form'

  export default {
    name: 'register-finish',
    components: {
      AvatarContainer,
      MaskedInput,
      AppNickname
    },
    computed: {
      ...mapGetters({
        'userStorage': 'getUser'
      }),
      btnDisabled () {
        return isEmpty(this.user.name)
      }
    },
    data: () => ({
      user: { }
    }),
    methods: {
      submitForm () {
        const loading = this.$loading.open()
        submitForm(this)
          .then(() => {
            loading.close()
          })
          .catch(() => {
            loading.close()
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
        'email',
        'avatar_id',
        'nickname'
      ]
      this.user = { ...pick(this.userStorage, props) }
    }
  }
</script>

<template>
  <div class="register-finish">
    <h1 class="title has-text-centered">
      Só mais algumas informações
    </h1>

    <p> É importante para nós as informações abaixo. Não se preocupe, <span class="has-text-weight-bold">materemos sigilo sobre seu CPF</span>. Os dados das redes sociais são interessantes para que as outras pessoas em nossa plataforma possam te encontrar no Twitter, Facebook... </p>
    <p> Por fim, é importante ter um avatar. Escolha o seu! </p>

    <div class="columns">
      <div class="column is-6">
        <div class="box">
          <h2 class="subtitle has-text-centered"> Dados principais </h2>

          <avatar-container
            :avatar_id="user.avatar_id"
            @choose-avatar="value => user.avatar_id = value"/>

          <p class="has-text-centered">Clique no avatar acima para modificar</p>

          <b-field>
            <b-input
              placeholder="Nome"
              type="text"
              size="is-medium"
              v-model="user.name"
              icon="user"
              maxlength="50"
              :has-counter="true"
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

          <app-nickname v-model="user.nickname" />

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
            @click="submitForm"> Atualizar dados </button>
        </div>
      </div>
    </div>
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
