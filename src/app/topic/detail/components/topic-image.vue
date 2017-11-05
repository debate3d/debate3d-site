<script>
  export default {
    name: 'app-topic-image',
    props: {
      topic: {
        type: Object,
        default: () => ({ })
      }
    },
    computed: {
      urlImage () {
        return this.topic.url_image || 'http://fakeimg.pl/1000x300/'
      }
    }
  }
</script>

<template lang="html">
  <div class="card topic-image">
    <div class="card-content">
      <figure class="image">
        <img :src="urlImage">
      </figure>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .topic-image {
    margin-bottom: 10px;
  }

  .card-content {
    padding: 0;
    max-height: 300px;
    overflow: hidden;
  }
</style>
