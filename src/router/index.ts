import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const baseRoutes: Array<RouteRecordRaw> = [
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{
      title:'关于'
    }
  }
]

const creatRouter =()=>{
  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:baseRoutes
  })
}

const router = creatRouter();
router.beforeEach((to,from,next)=>{
  if(to.path==='/login'){
    sessionStorage.setItem('user','');

  }else{
    if(from.path==='/login'){
      const user:string|null=sessionStorage.getItem('user');
      if(user&&user.length>3){
        console.log(router.getRoutes())
        for(const item of asyncRoutes){
          router.addRoute(item)
        }
      router.options.routes = router.getRoutes()
      }
    }
  }
  next();
})
export const asyncRoutes = [{path: '/manage', component: () => import('@/views/Manage.vue'), meta: {title: '管理'}}];
export default router
