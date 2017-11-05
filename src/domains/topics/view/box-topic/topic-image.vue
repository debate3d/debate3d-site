<script>
  export default {
    name: 'app-box-topic-image',
    props: {
      topic: {
        type: Object,
        default: () => ({ })
      }
    },
    computed: {
      urlImage () {
        return this.topic.url_image || 'http://fakeimg.pl/380x150/'
      }
    }
  }
</script>

<template lang="html">
  <div class="app-box-topic-image">
    <figure class="image">
      <img :src="urlImage">
    </figure>
  </div>
</template>

<style lang="scss" scoped>
  .app-box-topic-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    filter: brightness(0.7);
  }
</style>
