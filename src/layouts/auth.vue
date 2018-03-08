<template>
  <q-layout view="lHh Lpr lFf" class="bg-primary">
    <q-page-container>
      <div class="auth-container">
        <div style="width: 100%">
          <figure class="auth-image">
            <img src="~assets/eyeglasses-d3d.png" alt="Logo do Debate3D">
          </figure>
          <br />
          <router-view />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutAuth'
}
</script>

<style scoped>
.auth-container {
  width: 100vw;
  height: 100vh;
  padding-top: 40px;
  display: flex;
  justify-content: center;
  align-content: center;
}

.auth-image {
  max-width: 300px;
  margin: 0 auto;
}

.auth-image img {
  max-width: 250px;
  margin: 0 auto;
  display: block;
}
</style>
