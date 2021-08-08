import Vue from 'vue'
import vuex from 'vuex'
import {ADD} from 'store/mutations-types'
// 安装vuex
Vue.use(vuex)
// 创建vuex对象
let store = new vuex.Store({
    state:{
        // 存放状态数据
        token:'wenzhou-sight-webui_token',
        student:[
            {id:120,name:'xiaohai',age:23},
            {id:122,name:'luli',age:14},
            {id:100,name:'sdfe',age:24}
        ],
        counter:1000
    },
    mutations:{
        // 同步操纵，在其他组件中使用this.$store.commit('方法名')来改变我们的状态
        [ADD](state, payload){
            return state.counter += payload.mount
        }
    },
    getters:{
        // 类似于计算属性
        more20stu(state){
            return state.student.filter((item)=>{
                return item.age > 18
            })
        },
        more20stulength(state, getters){
            return getters.more20stu.length
        },
        moreagestu(state){
            return function (age) {
                return state.student.filter(item => item.age > age)
            }
        }
    },
    actions:{
        // 异步操作
    },
    modules:{}
})
// 导出该对象暴露接口
export default store