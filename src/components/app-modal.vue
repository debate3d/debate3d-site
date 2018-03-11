<script>
export default {
  name: 'app-modal',
  props: {
    title: {
      type: String,
      required: true
    },
    contentCss: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    close () {
      this.$refs.modal.hide()
    },
    open () {
      this.$refs.modal.show()
    }
  }
}
</script>

<template>
  <q-modal ref="modal" :content-css="contentCss">
    <q-modal-layout>
      <q-toolbar slot="header">
        <q-btn
          flat
          round
          dense
          @click="close"
          icon="keyboard_arrow_left"
        />
        <q-toolbar-title>
          {{ title }}
        </q-toolbar-title>
      </q-toolbar>

      <div style="padding: 15px">
        <slot></slot>
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<style>

</style>
