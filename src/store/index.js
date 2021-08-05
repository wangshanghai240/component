import Vue from 'vue'
import vuex from 'vuex'
// 安装vuex
Vue.use(vuex)
// 创建vuex对象
let Vuex = new vuex.Store({
    state:{
        token:'wenzhou-sight-webui_token'
    },
    mutations:{},
    getters:{},

})
// 导出该对象暴露接口
export default Vuex