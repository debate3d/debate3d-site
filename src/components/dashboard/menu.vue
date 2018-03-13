<script>
export default {
  name: 'dashboard-menu',
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
  }
}
</script>

<template>
  <q-layout-drawer v-model="localDrawerState" ref="x" content-class="bg-grey-3" behavior="mobile">
    <q-scroll-area
      style="width: 100%; height: 100%;">
      <div class="row flex-center" style="height: 115px">
        <figure class="logo-figure">
          <img alt="Debate3D logo" src="~assets/logo-debate3d-gray.png">
        </figure>
      </div>
      <!-- <q-list no-border>
        <q-item
          to="/showcase"
          exact
          replace
        >
          <q-item-side icon="home" />
          <q-item-main label="Showcase home" />
        </q-item>
        <q-item-separator />
        <template v-for="category in categories">
          <q-list-header :key="`header-${category.title}`">
            {{ category.title }}
          </q-list-header>
          <q-item
            v-for="feature in category.features"
            :key="feature.hash"
            :to="`/showcase/${category.hash}/${feature.hash}`"
            :replace="!category.extract"
          >
            <q-item-side :icon="feature.icon" />
            <q-item-main :label="feature.title" />
          </q-item>
          <q-item-separator :key="`separator-${category.title}`" />
        </template>
      </q-list> -->
    </q-scroll-area>
  </q-layout-drawer>
</template>

<style scoped>
.logo-figure {
  max-width: 100%;
  margin: 0;
  padding: 20px;
}

.logo-figure img {
  max-width: 100%;
}
</style>
