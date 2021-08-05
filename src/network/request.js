import axios from 'axios'
import Vuex from '../store/index'
// 导出该请求
export function request(config){
    // 通过axios.create()创建请求实例
    let instance = axios.create({
        timeout:5000,
        baseURL :'http://123.207.32.32:8000',
    })
    // 拦截器，这个拦截器可以是全局的也可以是实例的请求拦截
    // axios.interceptors.request.use()
    // 为什么要有拦截器，即用途是什么：①我们发送的某些信息不符合服务器的要求，需要添加一些东西
    //                             ②在发送请求的时候在用户界面加载一个动画，例如一个请求图标，转圈圈的那个
    //                             ③在发送请求的时候携带一些东西，例如token，登陆信息等等
    // 请求拦截
    instance.interceptors.request.use(config=>{
        // 例如这里是发送请求将token带上
        config.headers['token'] = Vuex.state.token
        // 拦截之后需要return，否则服务器无法接收到请求，因为被拦截了,响应拦截同理
        return config
    },err=>{
        return instance(err)
    })
    // 响应拦截
    instance.interceptors.response.use(res =>{
        // 拦截之后的操作

        // 将结果返回
        return res
    },err =>{
        console.log(err)
    })
// 发送真正的网络请求
    return instance(config)
}
