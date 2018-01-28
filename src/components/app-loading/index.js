import Vue from 'vue'
import Loading from './loading.vue'

export default {
  open () {
    const LoadingComponent = Vue.extend(Loading)

    return new LoadingComponent({
      el: document.createElement('div')
    })
  }
}
