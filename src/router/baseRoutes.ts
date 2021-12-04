import {RouteRecordRaw} from "vue-router";

const baseRoutes: Array<RouteRecordRaw> = [//公共路由
    {
        path: '/',
        redirect:'/login',
        component: ()=>import('../views/Login.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: ()=>import('../views/Login.vue'),
        meta:{
            title:'登录'
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: ()=>import('../views/Home.vue'),
        meta:{
            title:'首页'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import( '../views/About.vue'),
        meta:{
            title:'关于'
        }
    }
]
export default baseRoutes