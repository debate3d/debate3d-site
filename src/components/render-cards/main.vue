<script>
  import AppCard from '../../domains/card/view/card/main.vue'

  export default {
    name: 'render-cards',
    props: ['cards', 'successMessage', 'errorMessage'],
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
    <p class="title is-5 has-text-centered" v-if="count > '0'">
      {{ successMessage }}
    </p>
    <p class="title is-5 has-text-centered" v-if="count === '0'">
      {{ errorMessage }}
    </p>
    <div class="block-flex-wraped">
      <app-card
        v-for="(card, index) in records"
        :key="index"
        :card="card"></app-card>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .block-flex-wraped {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
