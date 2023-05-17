<script  lang="ts">
import { RouterView } from 'vue-router';
import {defineComponent} from 'vue';
import { useAuthStore } from './store/Auth';
// components
import NavBar from './components/NavBar.vue';
import SideBar from './components/Layouts/SideBar.vue';
export default  defineComponent({
  components:{
    RouterView,
    NavBar,
    SideBar
  },
  data() {
    return {
      Auth:useAuthStore()
    }
  },
  computed:{
   
  }  
})
</script>

<template>
  
    <div class=" ">
      <NavBar />
    <div class="flex pt-40 gap-2  md:mx-auto " :class="Auth.isLoggedIn ? ' w-full md:px-20' : 'md:max-w-7xl'">
      <SideBar v-if="Auth.isLoggedIn"  />

      <div class=" w-full" >
        <RouterView></RouterView>
      </div>
    </div>
    </div>
  
</template>

<style scoped>

</style>
