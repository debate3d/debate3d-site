import { register } from '@/services/auth'

export default (context, payload, loading, router) => {
  register(payload, context.$store)
    .then(response => {
      if (response) {
        router.push('/auth/finish')
      }
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
            context.nickname = ''
            context.$refs.inputName.focus()
            loading.close()
          }
        })
      }
    })
}
