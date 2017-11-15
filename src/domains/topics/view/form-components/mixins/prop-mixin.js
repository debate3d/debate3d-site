export default (prop, type, defaultValue) => {
  return {
    props: {
      [ prop ]: {
        type,
        default: defaultValue
      }
    },
    methods: {
      updateToSync () {
        this.$emit(`update:${prop}`, this.text)
      }
    }
  }
}
