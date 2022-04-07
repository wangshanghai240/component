import Vue from 'vue'
import vuerouter from 'vue-router'
// 安装该插件
Vue.use(vuerouter)
// 路由懒加载
// const Home = () => import('views/home/Home')
// const Cart = () => import('views/cart/Cart')
// const Cate = () => import('views/cate/Cate')
// const Profile = () => import('views/profile/Profile')
// const Detail = () => import('views/detail/Detail')
// 路由映射关系表
// let routes = [
//     {
//         path: '',
//         redirect: '/home'
//     },
//     {
//         path: '/home',
//         component: Home
//     },
//     {
//         path: '/cate',
//         component: Cate
//     },
//     {
//         path: '/cart',
//         component: Cart
//     },
//     {
//         path: '/profile',
//         component: Profile
//     },
//     {
//         path:'/detail',
//         component:Detail
//     }
// ]
// 创建路由对象
let routes = []
// 导入模块路由
const moduleRouter = require.context('./module', true, /\.js$/)
moduleRouter.keys().forEach(item => {
    routes = routes.concat(moduleRouter(item).default)
})
let router = new vuerouter({
    routes,
    mode: 'history'
})

// 重复点击触发promise错误解决方法
const originalPush = vuerouter.prototype.push
vuerouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
// 路由导航
router.beforeEach((to, from, next) => {
    console.log(to);
    if(to.name === 'profile'){
        if(sessionStorage.getItem !== null) next()
        else next({name:'login'})
    }else next({
        fullpath:'/login'
    })
    next()
})
// 导出路由对象，暴露接口
export default router