export default (ref, contentCss = {}) => ({
  data: () => ({
    contentCss
  }),
  methods: {
    open () {
      console.log('open')
      this.$refs[ref].open()
      this.$emit('open')
    },
    close () {
      this.$refs[ref].close()
      this.$emit('close')
    }
  }
})
