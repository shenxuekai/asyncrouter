<template>
  <div class="home">
    <nav-bar ></nav-bar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar/index.vue'
export default defineComponent({
  name: 'Home',
  components: {
    NavBar
  },
  computed:{
  },
  methods:{
  }
});
</script>
