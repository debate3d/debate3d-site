import { curry } from 'ramda'
import { isEmpty, get, gt } from 'lodash'

const isTheSameUser = (nickname, list) => {
  if (isEmpty(list) || gt(list.length, 1)) return false

  return list[0].nickname === nickname
}

export const getInformations = curry((context, result) => {
  const value = get(result, 'data.userSearch', [ ])
  const text = get(context, 'text')

  if (isTheSameUser(context.textBkp, value)) {
    context.emitInput(text)
    return
  }

  if (!isEmpty(value)) {
    // show helper text
    context.helperText = 'Este nickname já está sendo usado'
    context.typeColor = 'is-danger'
    return
  }

  context.helperText = ''
  context.typeColor = 'is-success'
  context.emitInput(text)
})
