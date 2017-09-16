<script>
  import { mapGetters } from 'vuex'

  import AppCardHeader from './card-header.vue'
  import AppCardFooter from './footer-card.vue'

  export default {
    props: [ 'card' ],
    components: { AppCardHeader, AppCardFooter },
    computed: {
      ...mapGetters({
        'user': 'getUser'
      }),
      argument () {
        return `${this.card.content.slice(0, 130)} ...`
      },
      position () {
        return (this.card.position === 'true') ? 'is-positive' : 'is-negative'
      }
    }
  }
</script>

<template lang="html">
  <div class="card" :class="position">
    <app-card-header :author="card.author"></app-card-header>
    <div class="card-content">
      <div class="content">
        <p class="subtitle">
          &ldquo;{{ argument }}&rdquo;
        </p>
        <router-link :to="`/card/${card.uid}`">
          Ver mais detalhes
        </router-link>
        </p>
      </div>
    </div>
    <app-card-footer :card="card" :url="''" :isMyArgument="false" />
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../../assets/sass/_extend";

  .card {
    background-color: $white;
    color: $text;
    width: 290px;
    height: 380px;
    display: inline-block;
    position: relative;
    margin: .8em .5em;
    border-radius: 2px;

    @media screen and (max-width: 768px) {
      display: block;
      margin: 1em auto;
    }

    &.is-positive {
      box-shadow: 0 2px 3px rgba($positive-color, 0.4), 0 0 0 1px rgba($positive-color, 0.4);
    }

    &.is-negative {
      box-shadow: 0 2px 3px rgba($negative-color, 0.4), 0 0 0 1px rgba($negative-color, 0.4);
    }
  }
</style>
