import { curry } from 'ramda'
import { isEmpty, get, gt } from 'lodash'

const isTheSameUser = (nickname, list) => {
  if (isEmpty(list) || gt(list.length, 1)) return false

  return list[0].nickname === nickname
}

export const getInformations = curry((context, result) => {
  const list = get(result, 'data.userSearch.records', [ ])
  const text = get(context, 'text')

  if (isTheSameUser(context.textBkp, list)) {
    context.updateNicknameValid(true)
    context.emitInput(text)
    return
  }

  if (!isEmpty(list)) {
    // show helper text
    context.helperText = 'Este nickname já está sendo usado'
    context.hasError = true
    context.updateNicknameValid(false)
    context.emitInput(text)
    return
  }

  context.helperText = ''
  context.hasError = false
  context.updateNicknameValid(true)
  context.emitInput(text)
})
