<script>
  import { debounce, isEmpty } from 'lodash'

  import query from './search-nickname.gql'
  import { getInformations } from './helpers'

  export default {
    name: 'app-input-nicname',
    data: () => ({
      text: '',
      helperText: '',
      typeColor: '',
      textBkp: ''
    }),
    props: {
      value: {
        type: String,
        default: '',
        required: true
      },
      nicknameValid: {
        type: Boolean
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
      }, 500),
      value (newValue) {
        this.text = isEmpty(newValue) ? '' : newValue
        this.textBkp = isEmpty(this.textBkp) ? newValue : ''
      }
    },
    methods: {
      reset () {
        this.helperText = ''
        this.typeColor = ''
      },
      emitInput (value) {
        this.$emit('input', value)
      },
      updateNicknameValid (value) {
        this.$emit('update:nicknameValid', value)
      }
    },
    mounted () {
      const value = isEmpty(this.value) ? '' : this.value
      this.text = value
      this.textBkp = value
      this.emitInput(value)
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
