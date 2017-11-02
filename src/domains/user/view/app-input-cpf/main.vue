<script>
  import { isEmpty } from 'lodash'
  import MaskedInput from 'vue-masked-input'

  export default {
    name: 'app-input-cpf',
    components: { MaskedInput },
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
      }
    },
    watch: {
      text () {
        this.$emit('input', this.text)
      },
      value (newValue) {
        this.text = isEmpty(newValue) ? '' : newValue
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

    <b-field>
      <p class="control has-icons-left has-icons-right">
        <masked-input
          v-model="text"
          class="input is-medium"
          @input="text = arguments[1]"
          mask="111.111.111.11"
          placeholder="000.000.000.00" />

        <span class="icon is-small is-left">
          <i class="fa fa-sticky-note"></i>
        </span>
      </p>
    </b-field>
  </b-field>
</template>
