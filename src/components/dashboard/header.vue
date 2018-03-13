<script>
export default {
  name: 'dashboard-header',
  props: {
    drawerState: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    localDrawerState: false
  }),
  watch: {
    localDrawerState: 'updateDrawerState',
    drawerState (bool) {
      this.localDrawerState = bool
    }
  },
  methods: {
    updateDrawerState (bool) {
      this.$emit('update-drawerState', bool)
    }
  },
  mounted () {
    this.localDrawerState = this.drawerState
  }
}
</script>

<template>
  <q-layout-header reveal>
    <q-toolbar>
      <q-btn
        flat
        round
        dense
        class="within-iframe-hide"
        @click="localDrawerState = !localDrawerState"
        icon="menu"
        aria-label="Menu"
      />
    </q-toolbar>
  </q-layout-header>
</template>

<style>

</style>
