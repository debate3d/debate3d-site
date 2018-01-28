import AppLoading from '../../components/app-loading'

const AppLoadingPlugin = {

  install (Vue) {
    Vue.prototype.$__appLoading = AppLoading
  }
}

export default AppLoadingPlugin
