<script>
export default {
  name: 'topics-pagination',
  props: {
    total: Number,
    current: Number
  },
  data: () => ({
    perPage: 10,
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
  @import "../../../assets/sass/_extend";

  .pagination {
    margin: $space / 2;
  }
</style>
