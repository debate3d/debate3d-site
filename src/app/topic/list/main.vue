<script>
  import mostPonts from './most-ponts.vue'
  import mostCards from './most-cards.vue'
  import mostVoted from './most-voted.vue'
  import AppPagination from '@/components/pagination.vue'

  export default {
    components: { mostPonts, mostCards, mostVoted, AppPagination },
    data () {
      return {
        selected: 3,
        options: [
          { label: 'Mais votados', value: 1 },
          { label: 'Com mais cards', value: 2 },
          { label: 'Mais pontos', value: 3 }
        ],
        count: 0,
        page: 1
      }
    }
  }
</script>

<template lang="html">
  <section class="topics-info">
    <h2 class="title is-4"> Temas da plataforma </h2>
    <b-field class="has-addons">

      <b-select v-model="selected" placeholder="Selecione um filtro">
        <option
          v-for="option in options"
          :value="option.value"
          :key="option.value"> {{ option.label }} </option>
      </b-select>

      <p class="control">
        <router-link to="/app/topic/search" class="button is-primary">
          Pesquise temas
        </router-link>
      </p>
    </b-field>

    <app-pagination
      :total="count"
      :current.sync="page"/>

    <most-ponts
      :page="page"
      v-if="selected === 3"
      @set-count="value => count = value" />

    <most-cards
      :page="page"
      v-if="selected === 2"
      @set-count="value => count = value" />

    <most-voted
      :page="page"
      v-if="selected === 1"
      @set-count="value => count = value" />
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

      .label {
        margin-right: 10px;
      }
    }
  }
</style>
