<script>
  /**
   * Avatar component
   * @url {String} image url
   * @name {String} name for alt image text
   * @length {String} image length
   * @return {VuejsComponent}
   */

  import { isEmpty } from 'lodash'

  export default {
    name: 'avatar',
    computed: {
      image () {
        return (isEmpty(this.url)) ? '/static/placeholder.jpg' : this.url
      }
    },
    props: ['url', 'name', 'length']
  }
</script>

<template lang="html">
  <figure class="image avatar" :class="length">
    <img :src="image" :alt="`Avatar do usuário ${name}`">
  </figure>
</template>

<style lang="scss" scoped>
  $avatar-length: 50px;

  .image {
    border-radius: 100%;
    overflow: hidden;
  }

  .image.is-large {
    width: $avatar-length * 3;
    height: $avatar-length * 3;
  }

  .image.is-medium {
    width: $avatar-length * 2;
    height: $avatar-length * 2;
  }

  .image.is-small {
    width: $avatar-length;
    height: $avatar-length;
  }
</style>
