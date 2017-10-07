<script>
export default {
  name: 'pagination',
  props: {
    total: Number,
    current: Number,
    perPage: {
      type: Number,
      default: 10
    }
  },
  data: () => ({
    isSimple: false
  })
}
</script>

<template>
  <b-pagination
    :total="total"
    :current="current"
    :simple="isSimple"
    :per-page="perPage"
    order="is-centered"
    @change="value => $emit('update:current', value)" />
</template>

<style lang="scss" scoped>
  @import "../assets/sass/_extend";

  .pagination {
    margin: $space / 2;
  }
</style>
