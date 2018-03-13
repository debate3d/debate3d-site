<script>
import LayoutHeader from '../components/dashboard/header'
import LayoutMenu from '../components/dashboard/menu'

export default {
  name: 'dashboard',
  components: {
    LayoutMenu,
    LayoutHeader
  },
  data: () => ({
    drawerState: false
  }),
  methods: {
    onUpdateDrawerState (bool) {
      this.drawerState = bool
    }
  }
}
</script>

<template>
  <q-layout view="Lhh lpr lFf">
    <layout-header :drawerState="drawerState" @update-drawerState="onUpdateDrawerState" />

    <layout-menu :drawerState="drawerState" @update-drawerState="onUpdateDrawerState" />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style>

</style>
