import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

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
import store from "@/store";
const creatRouter =()=>{
  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:baseRoutes
  })
}
let  router = creatRouter();
export  function resetRouter():void {
  sessionStorage.setItem('user','')
  router = creatRouter()
  store.commit('set_allRoutes',[])
}

router.beforeEach(
    (to,from,next)=>{
  if(to.path =='/login'||to.path==''){
    resetRouter()
    next()
    return
  }
  if(store.state.allRoutes&&store.state.allRoutes.length>0){
    next()
  }else {
    const user: string | null = sessionStorage.getItem('user');
    if(user){
      if (user.length > 3) {
        for (const item of asyncRoutes) {
          router.addRoute(item)
        }
      }
    }
    store.commit('set_allRoutes', router.getRoutes());
    next({...to, replace: true});
  }
});
export const asyncRoutes = [{path: '/manage', component: () => import('@/views/Manage.vue'), meta: {title: '管理'}}];
export default router
