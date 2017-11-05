<script>
  export default {
    props: {
      topic: {
        type: Object,
        default: () => ({ })
      }
    }
  }
</script>

<template lang="html">
  <div class="card">
    <div class="card-content content">
      <h1 class="title"> {{ topic.title }} </h1>
      <p class="content"> {{ topic.content }} </p>
      <span
        v-for="tag in topic.tags"
        class="tag is-info"
        @click="$router.push(`/tag/${tag.label}`)"> {{ tag.label }} </span>
    </div>
  </div>
</template>

<style media="screen" lang="scss">
  .content {
    word-wrap: break-word;
    flex-grow: 1;
  }
</style>
