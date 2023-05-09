<script  lang="ts">
import { RouterView } from 'vue-router';
import {defineComponent} from 'vue';

// components
import NavBar from './components/NavBar.vue';

export default  defineComponent({
  components:{
    RouterView,
    NavBar
  }  
})
</script>

<template>
  <div>
    <NavBar />
    <RouterView></RouterView>
  </div>
</template>

<style scoped>

</style>
