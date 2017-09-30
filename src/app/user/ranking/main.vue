<script>
  import AllUsers from './all-users'
  import Moderators from './moderators'
  import Debaters from './debaters'

  export default {
    name: 'ranking',
    components: { AllUsers, Moderators, Debaters },
    data () {
      return {
        selected: 1,
        options: [
          { label: 'Todos os usuários', value: 1 },
          { label: 'Moderadores', value: 2 },
          { label: 'Debatedores', value: 3 }
        ]
      }
    }
  }
</script>

<template lang="html">
  <div class="ranking">
    <h1 class="title has-text-centered"> Ranking de usuários </h1>
    <b-field label="Filtre por">
      <b-select v-model="selected" placeholder="Selecione um filtro">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"> {{ option.label }} </option>
      </b-select>
    </b-field>

    <all-users v-if="selected === 1" />
    <moderators v-if="selected === 2" />
    <debaters v-if="selected === 3" />
  </div>
</template>

<style scoped lang="scss">
  @import "../../../assets/sass/extend.sass";

  .ranking {
    padding: $space;
    max-width: 700px;
    margin: 0 auto;
  }
</style>
