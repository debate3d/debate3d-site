<script>
import { DataMixin, PropMixin } from './mixins'

export default {
  name: 'app-title-component',
  mixins: [
    DataMixin('text', ''),
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
      type="text"/>
  </b-field>
</template>
