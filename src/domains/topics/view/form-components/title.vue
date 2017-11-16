<script>
import { DataMixin, PropMixin } from './mixins'

export default {
  name: 'app-title-component',
  props: {
    disable: {
      type: Boolean,
      default: false
    }
  },
  mixins: [
    DataMixin('text', '', 'title'),
    PropMixin('title', String, '')
  ]
}
</script>

<template lang="html">
  <b-field
    label="Título">
    <b-input
      maxlength="45"
      placeholder="Título"
      v-model="text"
      type="text"
      :disabled="disable" />
  </b-field>
</template>
