<script>
  export default {
    props: ['card'],
    computed: {
      dislikes () {
        return this.card.dislikes.length
      }
    }
  }
</script>

<template lang="html">
  <div>
    <a
      href="#"
      class="negative"
      @click.prevent="computedVote('dislike')">
      <span
        class="icon is-medium"
        aria-hidden="true">
        <i class="fa fa-thumbs-o-down"></i>
      </span>
    </a>
    <a
      href="#"
      class="vote"
      @click.prevent="$emit('showDislike', 'dislike')">
      {{ dislikes }}
    </a>
  </div>
</template>

<style lang="css">
</style>
