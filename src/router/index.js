import Vue from 'vue'
import vuerouter from 'vue-router'
// 安装该插件
Vue.use(vuerouter)
// 路由懒加载
const Home = () => import('../views/Home')
const Cart = () => import('../views/Cart')
const Cate = () => import('../views/Cate')
const Profile = () => import('../views/Profile')
// 路由映射关系表
let routes = [
    {
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cate',
        component: Cate
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/profile',
        component: Profile
    }
]
// 创建路由对象
let router = new vuerouter({
    routes,
    mode: 'history'
})
// 重复点击触发promise错误解决方法
const originalPush = vuerouter.prototype.push
vuerouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

// 导出路由对象，暴露接口
export default router