<script>
  import { mapGetters } from 'vuex'

  import AppCardHeader from './card-header.vue'
  import AppCardFooter from './footer-card.vue'

  export default {
    props: {
      card: Object
    },
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
    },
    methods: {
      refresh () {
        this.$emit('refresh')
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
        <router-link :to="`/card/${card.uid}/detail`">
          Ver mais detalhes
        </router-link>
        <router-link :to="`/topic/${card.topic.uid}/detail`">
          Tema: {{ card.topic.title }}
        </router-link>
      </div>
    </div>
    <app-card-footer
      :card="card"
      :url="''"
      :isMyArgument="false"
      @refresh="refresh" />
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../../assets/sass/_extend";

  .card {
    background-color: $white;
    color: $text;
    width: 290px;
    height: 410px;
    position: relative;
    margin: .8em auto;
    border-radius: 2px;

    .card-footer {
      position: absolute;
      bottom: 0;
      left: 0;
    }

    .card-content {
      a {
        display: block;
        margin-bottom: 5px;
      }
    }

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
