import AddDeck from './mutation.gql'

export default (context, uid_card) => { // eslint-disable-line
  const data = { uid_card }
  return context.$apollo.mutate({
    mutation: AddDeck,
    variables: {
      data
    }
  })
}
