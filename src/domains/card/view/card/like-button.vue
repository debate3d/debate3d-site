<script>
  export default {
    props: {
      card: Object
    },
    computed: {
      likes () {
        return this.card.likes.length
      }
    }
  }
</script>

<template lang="html">
  <div>
    <a
      href="#"
      class="positive">
      <span
        class="icon is-medium"
        aria-hidden="true">
        <i class="fa fa-thumbs-o-up"></i>
      </span>
    </a>
    <a
      href="#"
      class="vote"
      @click.prevent="$emit('showLike')">
      {{ likes }}
    </a>
  </div>
</template>

<style lang="css">
</style>
