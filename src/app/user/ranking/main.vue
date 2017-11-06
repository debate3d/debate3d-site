<script>
  import * as RankingComponents from './components'

  export default {
    name: 'ranking',
    components: { ...RankingComponents },
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
    <b-field class="has-addons">
      <b-select v-model="selected" placeholder="Selecione um filtro">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"> {{ option.label }} </option>
      </b-select>

      <p class="control">
        <router-link to="/user/search" class="button is-primary">
          Pesquise usuários
        </router-link>
      </p>
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
