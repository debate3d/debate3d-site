export default (prop, defaultValue) => {
  return {
    data: () => ({
      [ prop ]: defaultValue
    }),
    watch: {
      [ prop ] () {
        console.log('watch')
        this.updateToSync()
      }
    },
    mounted () {
      this.updateToSync()
    }
  }
}
