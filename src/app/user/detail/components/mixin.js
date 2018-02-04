import { isEqual, capitalize, defaultsDeep, isEmpty } from 'lodash'

export default (name, type = 'simple', prop) => {
  const defaultObj = {
    name,
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    computed: {
      isModerator () {
        return this.user.is_moderator || false
      }
    }
  }

  if (isEqual(type, 'simple')) {
    return defaultObj
  }

  const propCapitalize = capitalize(prop)

  const computed = {
    [ `has${propCapitalize}` ] () {
      return !isEmpty(this.user[ prop ].records)
    }
  }

  return defaultsDeep({ }, defaultObj, { computed })
}
