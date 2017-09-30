import { login } from '@/services/auth'

export default (context, payload, loading) => {
  login(payload, this.$store, this.$router)
    .then(() => {
      loading.close()
    })
    .catch(err => {
      console.error(err)
      if (err) {
        loading.close()
        this.$snackbar.open({
          message: 'Usuário inválido',
          type: 'is-danger',
          position: 'is-top-left',
          actionText: 'Ok',
          onAction: () => {
            this.email = ''
            this.password = ''
            this.$refs.inputEmail.focus()
            loading.close()
          }
        })
      }
    })
}
