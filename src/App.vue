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
  
    <NavBar />
    <div class="flex mt-40 gap-2 mx-auto md:max-w-7xl">
      <SideBar v-if="Auth.isLoggedIn" class="h-screen sticky top-0" />

      <div class=" w-full" >
        <RouterView></RouterView>
      </div>
    </div>
  
</template>

<style scoped>

</style>
