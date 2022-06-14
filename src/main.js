import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 事件总线
import bus from 'utils/eventBus.js'
Vue.config.productionTip = false

import toast from 'plugin/Toast.vue'
const myplugin = {
  install(Vue){
    console.log('install---------')
    Vue.component('toast',toast)
  }
}
Vue.use(myplugin)
new Vue({
  router,
  store,
  bus,
  render: h => h(App),
}).$mount('#app')
