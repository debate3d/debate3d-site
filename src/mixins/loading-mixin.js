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
      setTimeout(() => {
        this.$__loading.close()
      }, 1000)
    }
  },
  mounted () {
    this.$__loading = this.$loading.open()
  },
  beforeDestroy () {
    this.$__loading.close()
  }
})
