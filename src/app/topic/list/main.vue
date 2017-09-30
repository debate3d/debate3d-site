<script>
  import mostPonts from './most-ponts.vue'
  import mostCards from './most-cards.vue'
  import mostVoted from './most-voted.vue'

  export default {
    components: { mostPonts, mostCards, mostVoted },
    data () {
      return {
        selected: 3,
        options: [
          { label: 'Mais votados', value: 1 },
          { label: 'Com mais cards', value: 2 },
          { label: 'Mais pontos', value: 3 }
        ]
      }
    }
  }
</script>

<template lang="html">
  <section class="topics-info">
    <h2 class="title is-4"> Temas da plataforma </h2>
    <b-field label="Filtre por">
      <b-select v-model="selected" placeholder="Selecione um filtro">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"> {{ option.label }} </option>
      </b-select>
    </b-field>
    <most-ponts v-if="selected === 3"></most-ponts>
    <most-cards v-if="selected === 2"></most-cards>
    <most-voted v-if="selected === 1"></most-voted>
  </section>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .topics-info {
    padding: $space;

    .title {
      &:after {
        content: '';
        display: block;
        width: 20%;
        height: 2px;
        background-color: $color4;
        margin: 2px 0 0 5px;
      }
    }

    .field {
      margin-bottom: $space;
    }
  }
</style>
