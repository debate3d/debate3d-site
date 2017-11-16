export default (prop, defaultValue, property) => {
  return {
    data: () => ({
      [ prop ]: defaultValue
    }),
    watch: {
      [ prop ] () {
        this.updateToSync(this[ prop ])
      }
    },
    mounted () {
      this[ prop ] = this[ property ]
      this.updateToSync(this[ property ])
    }
  }
}
