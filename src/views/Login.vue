<template>
  <div class="user">
    dfsdf
    <input type="text" placeholder="user" v-model="account">
    <input type="text" placeholder="password" v-model="password">
    <button @click="handleLogin()">Login</button>
  </div>
</template>

<script >
import router from "../router";

export default {
  name: "Login.vue",
  data() {
    return {
      account: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      if(this.account.trim()){
        sessionStorage.setItem('user', this.account)
        this.$router.push('/home');
      }else {
        alert("cuowu")
      }
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