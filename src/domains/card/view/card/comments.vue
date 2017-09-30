<template lang="html">
  <div>
    <span
      class="icon is-medium"
      aria-hidden="true">
      <i class="fa fa-comments"></i>
    </span>
    <span class="fb-comments-count vote" :data-href="url"></span>
  </div>
</template>

<script>
export default {
  props: {
    url: String
  }
}
</script>

<style lang="css">
</style>
