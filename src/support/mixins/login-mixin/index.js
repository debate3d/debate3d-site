import ModalFormLogin from './modal-form.vue'

export default {
  components: {
    ModalFormLogin
  },
  methods: {
    $__loadLoginMixin () {
      this.$refs.modalFormLogin.open()
    }
  }
}
