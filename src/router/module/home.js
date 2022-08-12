export default [
    {
        path:'/home',
        name:"home",
        component:() => import('views/home/Home')
    },
    {
        path:'/',
        redirect:'/home',
        component:()=>import('views/home/Home')
    }
]