import { register } from '@/services/auth'

export default (context, payload, loading) => {
  return register(payload, context.$store)
    .then(response => {
      loading.close()
    })
    .catch(err => {
      console.error(err)
      if (err) {
        loading.close()
        context.$snackbar.open({
          message: 'Usuário inválido',
          type: 'is-danger',
          position: 'is-top-left',
          actionText: 'Ok',
          onAction: () => {
            context.email = ''
            context.password = ''
            context.$refs.inputName.focus()
            loading.close()
          }
        })
      }
    })
}
