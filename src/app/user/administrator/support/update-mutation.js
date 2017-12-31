import { pick } from 'ramda'

import mutation from './mutation.gql'

export default (context, loading) => {
  const users = context.userChoose.map(pick(['uid', 'email']))
  const data = {
    users,
    subscriber: context.subscriber
  }
  return context.$apollo.mutate({
    mutation,
    variables: {
      data
    }
  })
    .then(result => {
      context.$snackbar.open({
        message: 'Usuários atualizados com sucesso',
        type: 'is-success',
        position: 'is-bottom-right',
        actionText: 'OK'
      })
      loading.close()
    })
    .catch(err => {
      console.error(err)
      context.$snackbar.open({
        message: 'Não foi possível atualizar os usuários',
        type: 'is-danger',
        position: 'is-bottom-right',
        actionText: 'OK'
      })
      loading.close()
    })
}
