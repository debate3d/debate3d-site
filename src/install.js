import FBSignInButton from 'vue-facebook-signin-button'
import Buefy from 'buefy'
import VueApollo from 'vue-apollo'
import SocialSharing from 'vue-social-sharing'

/**
 * install all plugins
 * @param  {Object} Vue Root Vue instance
 * @return {Null}
 */
export default Vue => {
  Vue.use(FBSignInButton)

  Vue.use(Buefy, {
    defaultIconPack: 'fa'
  })
  Vue.use(VueApollo)
  Vue.use(SocialSharing)
}
