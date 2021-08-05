// 很多组件都需要网络请求，不能直接在组件中使用使用，需要再封装一层，例如这里的home.js单独管理home组件相关的请求，便于维护，降低耦合度
import { request } from './request'

export function getHomeMultidata(){
    return request({
        url:'/home/multidata'
    })
}
