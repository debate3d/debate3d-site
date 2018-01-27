import { omit, isEmpty } from 'lodash'

import UpdateUserMutation from './update-user-mutation.gql'
import { mutationResolveHelper, mutationRejectHelper } from '@/helpers'

import { uploadImage } from '@/domains/cloudnary/services'

export default context => {
  const { is_moderator, file, bannerFile } = context.user // eslint-disable-line
  const data = omit(context.user, ['email', 'is_moderator', 'file', 'bannerFile'])

  const resolve = [
    context,
    'Dados atualizados'
  ]

  const errors = [
    context,
    'Não foi possível atualizar os dados'
  ]

  if (is_moderator) { // eslint-disable-line
    const uploadFile = uploadImage(file)
    const uploadBannerFile = uploadImage(bannerFile)

    return Promise
      .all([ uploadFile, uploadBannerFile ])
      .then(responses => {
        const resUploadFile = responses[0]
        const resBannerFile = responses[1]

        if (!isEmpty(resUploadFile)) {
          data.avatar_id = ''
          data.avatar_id = resUploadFile.data.secure_url
        }

        if (!isEmpty(resBannerFile)) {
          data.banner_url = resBannerFile.data.secure_url
        }

        context.$apollo.mutate({
          mutation: UpdateUserMutation,
          variables: {
            data
          }
        })
          .then(mutationResolveHelper(...resolve))
          .catch(mutationRejectHelper(...errors))
      })
  }

  return context.$apollo.mutate({
    mutation: UpdateUserMutation,
    variables: {
      data
    }
  })
    .then(mutationResolveHelper(...resolve))
    .catch(mutationRejectHelper(...errors))
}
