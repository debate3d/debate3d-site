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
  <div class="be-subscriber content box">
    <h1 class="title has-text-centered"> Seja um assinante! </h1>

    <hr>

    <blockquote>
      "O café, a notícia matutina e o debate estão sempre presentes em nosso cotidiano"
    </blockquote>

    <p> O Debate3D é fundamental para você que tem seguidores, clientes, funcionários e amigos. </p>

    <p> Uma excelente oportunidade para ampliar a experiência de seus relacionamentos. </p>

    <p class="has-text-weight-bold"> Por apenas R$ 49.9, você pode: </p>

    <ul>
      <li> Conhecer melhor o posicionamento dos seus seguidores; </li>
      <li> Melhorar a experiência dos seus clientes; </li>
      <li> Construir melhor ambiente para seus funcionários; </li>
      <li> E muito mais... </li>
      <li> Já imaginou? [...] </li>
    </ul>

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
    margin: 20px auto;
    padding: 20px;
  }
</style>
