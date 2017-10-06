<script>
  import { isNull, isUndefined } from 'lodash'

  export default {
    name: 'avatar',
    props: {
      number: Number,
      length: {
        type: Number,
        default: 50
      }
    },
    computed: {
      url () {
        return (isNull(this.number) || isUndefined(this.number))
          ? 'static/avatars/placeholder.jpg'
          : `static/avatars/avatar${this.number}.jpg`
      },
      style () {
        return {
          width: `${this.length}px`,
          height: `${this.length}px`
        }
      }
    }
  }
</script>

<template lang="html">
  <figure
    class="avatar"
    :style="style">
    <img :src="url">
  </figure>
</template>

<style lang="scss" scoped>
  @import "../assets/sass/extend";
  .avatar {
    border-radius: 100%;
    overflow: hidden;
  }
</style>
