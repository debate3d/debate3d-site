<script>
  import { pick, isEmpty, isNumber } from 'lodash'

  import AvatarContainer from '../app-update-avatar'
  import AppInputCpf from '../app-input-cpf'
  import AppInputCep from '../app-input-cep'
  import AppInputNickname from '../app-nickname'

  const PROPS = [
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

  export default {
    name: 'app-update-user',
    components: { AvatarContainer, AppInputCpf, AppInputCep, AppInputNickname },
    props: {
      btnLabel: {
        type: String,
        default: ''
      },
      user: {
        type: Object,
        default: () => ({ })
      }
    },
    data: () => ({
      isNicknameValid: false
    }),
    watch: {
      user: {
        handler: 'updateUser',
        deep: true
      }
    },
    methods: {
      submit () {
        const { avatar_id } = this.user
        if (isEmpty(avatar_id) && !isNumber(avatar_id)) {
          this.openSnackbar('Escolha um avatar')
          return
        }

        if (!this.isNicknameValid) {
          this.openSnackbar('Nickname inválido')
          return
        }
        this.$emit('app:submit')
      },
      updateUser (user) {
        this.$emit('update:user', user)
      },
      openSnackbar (message) {
        this.$snackbar.open({
          message,
          type: 'is-warning',
          position: 'is-top-left',
          actionText: 'Ok'
        })
      }
    },
    mounted () {
      const user = pick(this.$store.state.auth.user, PROPS)
      this.updateUser(user)
    }
  }
</script>

<template lang="html">
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

        <app-input-nickname
          v-model="user.nickname"
          :nickname-valid.sync="isNicknameValid" />

        <app-input-cpf v-model="user.cpf" />

        <!-- <app-input-cep v-model="user.cep" /> -->
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
          @click="submit"> {{ btnLabel }} </button>
      </div>
    </div>
  </div>
</template>
