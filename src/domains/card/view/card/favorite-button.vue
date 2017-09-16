<script>
  export default {
    props: ['card'],
    computed: {
      deck () {
        return this.card.deck.length
      }
    }
  }
</script>

<template lang="html">
  <div>
    <a
      href="#"
      class="favorited">
      <span
        class="icon is-medium"
        aria-hidden="true">
        <i class="fa fa-star-o"></i>
      </span>
    </a>
    <a
      href="#"
      class="vote"
      @click.prevent="$emit('showFavorite', 'favorite')">
      {{ deck }}
    </a>
  </div>
</template>

<style lang="css">
</style>
