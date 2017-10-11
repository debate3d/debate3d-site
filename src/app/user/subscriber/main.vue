<script>
  import { mapGetters } from 'vuex'
  import { isEmpty } from 'lodash'

  import submitForm from './submit-form'

  export default {
    name: 'user-to-subscriber',
    data: () => ({
      cupom: ''
    }),
    computed: {
      ...mapGetters({
        user: 'getUser'
      }),
      disabledBtn () {
        return isEmpty(this.cupom)
      }
    },
    methods: {
      subscriber () {
        const cupom = this.cupom

        const data = { cupom }
        submitForm(this, data)
      }
    }
  }
</script>

<template>
  <div class="be-subscriber content">
    <h1 class="title has-text-centered"> Seja um assinante! </h1>

    <hr>

    <p> Sabe qual o privilégio de um assinante? </p>

    <ul>
      <li> Poder criar temas para discussão ilimitadamente </li>
    </ul>

    <p> Por apenas <span class="has-text-weight-bold">R$ 6.90</span> por mês você pode criar um tema para discussão na sua roda de amigos, na igreja, na faculdade, no colégio... Já imaginou? E isso ganhando pontos quando as pessoas interagem e assim ganhando mais notoriedade na plataforma? Quer partipar disso? </p>

    <p class="has-text-weight-bold"> Faça sua assinatura pelo PagSeguro e ganhe o cupom para desbloquear sua assinatura!</p>

    <b-field
      label="Insira seu cupom e se torne um assinante">
      <b-input
        type="text"
        v-model="cupom"
        @click="subscriber"></b-input>
    </b-field>

    <button
      class="button is-info"
      :disabled="disabledBtn"
      @click="subscriber"> Usar cupom </button>
  </div>
</template>

<style lang="scss" scoped>
  .be-subscriber {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
</style>
