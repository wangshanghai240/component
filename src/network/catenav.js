import { request } from './request'
 
// 请求分类侧边栏数据
export function getCateNav(){
    return request({
        url:'/navlist',
        mehtod:'get'
    })[1]
}