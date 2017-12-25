import ModalFormLogin from './modal-form.vue'
import { EventBus } from '../../../helpers'

export default {
  components: {
    ModalFormLogin
  },
  methods: {
    $__loadLoginMixin () {
      this.$refs.modalFormLogin.open()
    },
    $__removeLogin () {
      if (this.$refs.modalFormLogin) {
        this.$refs.modalFormLogin.close()
      }
    }
  },
  mounted () {
    EventBus.$on('open:login:modal', () => {
      return this.$__loadLoginMixin()
    })

    EventBus.$on('close:login:modal', () => {
      return this.$__removeLogin()
    })
  }
}
