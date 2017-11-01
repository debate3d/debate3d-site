<script>
  import { debounce, isEmpty } from 'lodash'

  import query from './search-nickname.gql'
  import { getInformations } from './helpers'

  export default {
    name: 'nickname',
    data: () => ({
      text: '',
      helperText: '',
      typeColor: '',
      textBkp: ''
    }),
    props: {
      value: {
        type: String,
        required: true
      }
    },
    watch: {
      text: debounce(function () {
        if (isEmpty(this.text)) {
          this.reset()
          return
        }

        this.$apollo.query({
          query,
          variables: {
            filter: {
              nickname: this.text
            }
          }
        }).then(getInformations(this))
      }, 1000),
      value (newValue) {
        this.text = newValue
      }
    },
    methods: {
      reset () {
        this.helperText = ''
        this.typeColor = ''
      },
      emitInput (value) {
        this.$emit('input', value)
      }
    },
    mounted () {
      this.text = this.value
      this.textBkp = this.value
      this.emitInput(this.value)
    }
  }
</script>

<template>
  <b-field
    :type="typeColor"
    :message="helperText">

    <b-input
      placeholder="Nickname"
      type="text"
      size="is-medium"
      expanded
      icon="user"
      v-model="text"></b-input>
  </b-field>
</template>
