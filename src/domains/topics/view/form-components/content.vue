<script>
  import { DataMixin, PropMixin } from './mixins'

  export default {
    name: 'app-content-component',
    mixins: [
      DataMixin('text', ''),
      PropMixin('content', String, '')
    ]
  }
</script>

<template lang="html">
  <b-field
    label="Conteúdo">
    <b-input
      maxlength="2000"
      type="textarea"
      placeholder="Digite aqui o conteúdo para o seu tema"
      v-model="text"></b-input>
  </b-field>
</template>
