<script>
import { mapState } from 'vuex'

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
  computed: {
    ...mapState(['pageTitle'])
  },
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
    <q-toolbar color="blue-grey-10">
      <q-btn
        flat
        round
        dense
        class="within-iframe-hide"
        @click="localDrawerState = !localDrawerState"
        icon="menu"
        aria-label="Menu"
      />
      <q-toolbar-title>
        {{ pageTitle }}
      </q-toolbar-title>

      <div class="row flex-center">
        <figure class="logo-figure">
          <img alt="Debate3D logo" src="~assets/logo-debate3d-white.png">
        </figure>
      </div>
    </q-toolbar>
  </q-layout-header>
</template>

<style scoped>
.logo-figure {
  max-width: 150px;
  margin: 0;
  position: absolute;
  top: 12px;
  right: 12px;
}

.logo-figure img {
  max-width: 100%;
}
</style>
