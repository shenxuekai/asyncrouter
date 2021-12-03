<template>
  <div>
    <router-link v-for="item in routeList" :to=item.path :key="item" class="link">{{item.meta?item.meta.title:''}}</router-link>
  </div>
</template>

<script>
import router from "@/router";

export default {
  name: "NavBar",
  props:{
    menu:{
      type:Array,
      default(){
        return []
      }
    }
  },
  computed:{
    routeList(){
      return this.$router.options.routes;
    }
  },
  data(){
    return {
      test:[
        {
          path:'/about',
          name:'About',
          meta:{
            title:'关于'
          }
        },{
          path:'/manage',
          name:'Manage',
          meta:{
            title:'管理'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.link{
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 30px;
}
</style>