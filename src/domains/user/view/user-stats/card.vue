<script>
  import { get } from 'lodash'

  const getProp = (obj, prop) => get(obj, prop, '')

  export default {
    name: 'user-stats-card',
    props: {
      status: Object,
      col: String
    },
    computed: {
      label () { return getProp(this.status, 'label') },
      icon () { return getProp(this.status, 'icon') },
      count () { return getProp(this.status, 'count') }
    }
  }
</script>

<template>
  <div class="column is-half-mobile" :class="col">
    <b-icon size="is-medium" :icon="icon"></b-icon>
    <b-tag size="is-medium"> {{ count }} </b-tag>
    <p class="has-text-centered"> {{ label }} </p>
  </div>
</template>

<style lang="scss" scoped>
  @import "../../../../assets/sass/_extend";

  .icon {
    display: block;
    margin: 0 auto;
  }

  .tag {
    display: flex;
    max-width: 30px;
    margin: 10px auto;
    justify-content: center;
    align-items: center;
    background-color: $primary;
    color: $white;
  }
</style>
