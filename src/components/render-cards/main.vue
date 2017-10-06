<script>
  import AppCard from '../../domains/card/view/card/main.vue'

  export default {
    name: 'render-cards',
    props: {
      cards: Object,
      successMessage: String,
      errorMessage: String,
      column: String
    },
    components: { AppCard },
    computed: {
      count () {
        return this.cards.count
      },
      records () {
        return this.cards.records
      }
    }
  }
</script>

<template lang="html">
  <div>
    <p class="title is-5 has-text-centered" v-if="count > 0">
      {{ successMessage }}
    </p>
    <p class="title is-5 has-text-centered" v-if="count === 0">
      {{ errorMessage }}
    </p>
    <div class="columns is-multiline is-centered">
      <div class="column" :class="column" v-for="(card, index) in records">
        <app-card
          :key="index"
          :card="card"></app-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .column {
    min-width: 295px;
  }
</style>
