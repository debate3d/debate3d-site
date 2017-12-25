<script>
  import { isNull, isUndefined, isString, isEmpty } from 'lodash'

  export default {
    name: 'avatar',
    props: {
      number: String,
      length: {
        type: Number,
        default: 50
      }
    },
    computed: {
      isEmptyAvatarId () {
        if (isString(this.number)) {
          return isEmpty(this.number)
        }
        return isNull(this.number) || isUndefined(this.number)
      },
      url () {
        return this.isEmptyAvatarId
          ? 'static/avatars/placeholder.jpg'
          : isString(this.number)
            ? this.number
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
