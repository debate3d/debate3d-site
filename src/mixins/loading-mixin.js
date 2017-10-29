/**
 * mixin for loading sync apollo querys
 * @param  {String} keyApollo
 * @return {Object}
 */
export default keyApollo => ({
  data: () => ({
    $__loading: { }
  }),
  watch: {
    [ keyApollo ] () {
      this.$__loading.close()
    }
  },
  mounted () {
    this.$__loading = this.$loading.open()
  }
})
