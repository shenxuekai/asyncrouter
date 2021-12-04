<template>
  <div>
    <router-link v-for="item in this.$store.state.allRoutes" :to=item.path :key="item" class="link">{{item.meta?item.meta.title:''}}</router-link>
  </div>
</template>

<script>

export default {
  name: "NavBar"
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