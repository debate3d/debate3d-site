<script>
  import SharedLinks from '@/components/shared-links'
  import FollowButton from '@/domains/topics/view/follow-button'

  export default {
    components: {
      SharedLinks,
      FollowButton
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
        @click="$router.push(`/tag/${tag.label}`)"> {{ tag.label }} </span>

      <follow-button :topic="topic" />

      <div class="shared-topic">
        <h3 class="title"> Compartilhe este tema </h3>
        <shared-links />
      </div>
    </div>
  </div>
</template>

<style media="screen" scoped>
  .content {
    word-wrap: break-word;
    flex-grow: 1;
  }

  .content .shared-topic {
    max-width: 600px;
    margin-top: 20px;
  }

  .content .shared-topic .block-button {
    justify-content: baseline;
  }

  .content >>> .follow-topic-buttom {
    margin-top: 10px;
  }
</style>
