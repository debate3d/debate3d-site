import { login } from '@/services/auth'

export default (context, payload, loading) => {
  login(payload, context.$store, context.$router)
    .then(() => {
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
            context.$refs.inputEmail.focus()
            loading.close()
          }
        })
      }
    })
}
