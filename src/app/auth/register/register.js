import { register } from '@/services/auth'

export default (context, payload, router) => {
  return register(payload, context.$store)
    .then(() => {
      router.push({ name: 'dashboard' })
      return true
    })
    .catch(err => {
      console.error(err)
      context.reset()
      return context.$q.notify({
        message: 'Não foi possível se registrar',
        type: 'danger'
      })
    })
}
