<script>
import AuthRecoveryForm from './form'

export default {
  name: 'auth-recovery-password-page',
  components: { AuthRecoveryForm }
}
</script>

<template>
  <q-card class="auth-recovery-password bg-white">
    <q-card-main>
      <auth-recovery-password-form />
    </q-card-main>
  </q-card>
</template>

<style scoped>
  .auth-recovery-password {
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    max-height: auto;
  }
</style>
