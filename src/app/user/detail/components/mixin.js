import { isEqual, capitalize, defaultsDeep, isEmpty } from 'lodash'

export default (name, type = 'simple', prop) => {
  const defaultObj = {
    name,
    props: {
      user: {
        type: Object,
        required: true
      }
    }
  }

  if (isEqual(type, 'simple')) {
    return defaultObj
  }

  const propCapitalize = capitalize(prop)

  const data = () => ({
    [ `show${propCapitalize}` ]: false
  })

  const computed = {
    [ `textButton${propCapitalize}` ] () {
      return this[ `show${propCapitalize}` ]
        ? `Visualizar ${prop}`
        : `Esconder ${prop}`
    },
    [ `has${propCapitalize}` ] () {
      return !isEmpty(this.user[ prop ].records)
    }
  }

  return defaultsDeep({ }, defaultObj, { data, computed })
}
