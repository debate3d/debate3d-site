export default (prop, type, defaultValue) => {
  return {
    props: {
      [ prop ]: {
        type,
        default: defaultValue
      }
    },
    methods: {
      updateToSync (value) {
        this.$emit(`update:${prop}`, value)
      }
    }
  }
}
