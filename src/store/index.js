import Vue from 'vue'
import vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleB from './modules/moduleB'
import moduleA from './modules/moduleA'

// 安装vuex
Vue.use(vuex)

// 将模块modules属性中的模块单独抽离出来组织代码会更加好
const state = {
    // 存放状态数据
    token: 'wenzhou-sight-webui_token',
    student: [{
            id: 120,
            name: 'xiaohai',
            age: 23
        },
        {
            id: 122,
            name: 'luli',
            age: 14
        },
        {
            id: 100,
            name: 'sdfe',
            age: 24
        }
    ],
    counter: 1000,
    cart:[]
}
// 创建vuex对象
let store = new vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules: {
        // 模块a
        a: moduleA,
        // 模块b
        b: moduleB
    }
})

// 导出该对象暴露接口
export default store