// 事件总线
import Vue from 'vue'
let bus = new Vue()
Vue.prototype.$bus = bus
export default bus