<script>
  import SharedLinks from '@/components/shared-links'

  export default {
    components: {
      SharedLinks
    },
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
        @click="$router.push(`/app/tag/${tag.label}`)"> {{ tag.label }} </span>

      <div class="shared-topic">
        <h3 class="title"> Compartilhe este tema </h3>
        <shared-links />
      </div>
    </div>
  </div>
</template>

<style media="screen" lang="scss" scoped>
  .content {
    word-wrap: break-word;
    flex-grow: 1;

    .shared-topic {
      max-width: 600px;
      margin-top: 20px;

      .block-button {
        justify-content: baseline;
      }
    }
  }
</style>
