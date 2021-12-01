<template>
  <div class="user">
    <input type="text" placeholder="user" v-model="account">
    <input type="text" placeholder="password" v-model="password">
    <button @click="handleLogin()">Login</button>
  </div>
</template>

<script lang="ts">
import router from '@/router/index.ts'
export default {
  name: "Login.vue",
  data():unknown{
    return {
      account:'',
      password:''
    }
  },
  methods:{
    handleLogin() :void{
      sessionStorage.removeItem('user')
      // console.log(this.account)
      // console.log(this.password)
      if(sessionStorage.getItem('user')>100){
        router.addRoute({path:'/manage',component:()=>import('@/views/Manage.vue'),meta:{title:'管理'}})
      }
      this.$router.push('/home');
    }
  }
}
</script>

<style scoped>
.user{
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
input ,button{
  width: 200px;
  margin-bottom: 25px;
}

</style>