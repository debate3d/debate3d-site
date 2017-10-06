<script>
  import { isNull, isUndefined } from 'lodash'

  export default {
    name: 'avatar',
    props: {
      number: Number,
      active: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      style () {
        return this.active
          ? 'is-active'
          : ''
      },
      urlAvatar () {
        return (isNull(this.number) || isUndefined(this.number))
          ? 'static/avatars/placeholder.jpg'
          : `static/avatars/avatar${this.number}.jpg`
      }
    }
  }
</script>

<template lang="html">
  <figure class="avatar" :class="style">
    <img :src="urlAvatar" @click="$emit('update-select', number)">
  </figure>
</template>

<style lang="scss" scoped>
  @import "../../../../assets/sass/extend";
  .avatar {
    width: 100px;
    height: 100px;
    margin: 5px;
    transition: all .3s ease;
    border-radius: 3px;
    cursor: pointer;

    &.is-active {
      border: 3px solid $primary;
    }
  }
</style>
