<script>
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
      styleClass () {
        return `is-${this.number}`
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
  <div
    class="avatar"
    :class="styleClass"
    :style="style"></div>
</template>

<style lang="scss" scoped>
  @import "../assets/sass/extend";
  .avatar {
    border-radius: 100%;

    @for $i from 1 through 11 {
      &.is-#{$i} {
        background: url('../assets/img/avatars/avatar#{$i}.jpeg') no-repeat;
        background-size: contain;
      }
    }
  }
</style>
