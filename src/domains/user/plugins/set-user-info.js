import { isEmpty, get } from 'lodash'
import { mapGetters } from 'vuex'

const SetUserInfoPlugin = {

  install (Vue) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          $__isLogged: 'getIsLogged',
          $__isAdministrator: 'getIsAdministrator',
          $__isModerator: 'getIsModerator'
        }),
        $__isDebater () {
          return !isEmpty(get(this.$store, 'state.auth.user.cards', []))
        }
      }
    })
  }
}

export default SetUserInfoPlugin
