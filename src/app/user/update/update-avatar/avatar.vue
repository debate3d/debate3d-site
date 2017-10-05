<script>
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
          ? `is-active is-${this.number}`
          : `is-${this.number}`
      }
    }
  }
</script>

<template lang="html">
  <div
    class="avatar"
    :class="style"
    @click="$emit('update-select', number)"></div>
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

    @for $i from 1 through 11 {
      &.is-#{$i} {
        background: url('../../../../assets/img/avatars/avatar#{$i}.jpeg') no-repeat;
        background-size: contain;
      }
    }
  }
</style>
