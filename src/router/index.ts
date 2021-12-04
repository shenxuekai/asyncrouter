import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import baseRoutes from "@/router/baseRoutes";
import {asyncRoutes} from "@/router/asyncRoutes";
import store from "@/store";
const creatRouter =()=>{
  return createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:baseRoutes
  })
}
let  router = creatRouter();

//重置路由：清空user 创建新的router store清空routes记录
export  function resetRouter():void {
  sessionStorage.setItem('user','')
  router = creatRouter()
  store.commit('set_allRoutes',[])
}
//流程：
// 1.如果去login或者‘’：重置后直接跳（）    //重置路由函数：清空user 创建新的router store清空routes记录
// 2.如果去其他的正常路由 ：判断路由是不是已经构造过了，够早过了直接跳，没构造过下一步
// 3.构造路由：判断一下用户名长度，>3按照管理员添加路由，小于3就不管，默认路由
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
export default router
