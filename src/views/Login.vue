<template>
  <div class="user">
    <input type="text" placeholder="user" v-model="account">
    <input type="text" placeholder="password" v-model="password">
    <button @click="handleLogin()">Login</button>
  </div>
</template>

<script>
export default {
  name: "Login.vue",
  data(){
    return {
      account:'',
      password:''
    }
  },
  methods:{
    handleLogin(){
      // console.log(this.account)
      // console.log(this.password)

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