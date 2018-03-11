<script>
import { debounce, isEmpty } from 'lodash'

import query from './search-nickname.gql'
import { getInformations } from './helpers'

export default {
  name: 'app-input-nicname',
  data: () => ({
    text: '',
    helperText: '',
    textBkp: '',
    hasError: false,
    isLoading: false
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
      this.isLoading = true
      this.$apollo.query({
        query,
        variables: {
          filter: {
            nickname: this.text
          }
        }
      })
        .then(getInformations(this))
        .then(res => {
          this.isLoading = false
        })
    }, 500),
    value (newValue) {
      this.text = isEmpty(newValue) ? '' : newValue
      this.textBkp = isEmpty(this.textBkp) ? newValue : ''
    }
  },
  methods: {
    reset () {
      this.helperText = ''
      this.hasError = false
      this.isLoading = false
      this.updateNicknameValid(false)
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
  <q-field
    :error="hasError"
    :error-label="helperText">

    <q-input
      float-label="Nickname"
      expanded
      icon="user"
      :max-heigth="15"
      :loading="isLoading"
      v-model="text"></q-input>
  </q-field>
</template>
