<template lang="">
 
<div class="w-full   lg:max-w-2xl bg-white rounded-lg   ">
   <div class="border">
    <div class="p-3 dark:bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <h2 class=" font-bold text-2xl"><i class='bx bx-image-alt'></i> Product Pictures </h2>
    </div>
    <div v-if="pictures.length <= 0">
        <div class="flex justify-center px-10 pb-10 pt-10">
          <div class="text-center ">
            <div class="flex justify-center">
                <img src="./images/noproduct.png" alt="No Product" class="w-80" width="80%" height="80%">

            </div>
            <h1 class="font-bold text-md">No product pictures</h1>
            <p>You can review your product pictures here before you save them to the system.</p>
          </div>
        </div>
    </div>
    <div v-else class="grid grid-cols-1 md:grid-cols-2 overflow-y-scroll	overflow-x-hidden	 max-h-96 h-fit bg-slate-700	">
        <div  v-for="(pic,index) in pictures" :key="index" class=" pb-10">
            <img class=" w-full h-full" :src="pic" height="100%" width="100%" alt="product image" />
            <div class="flex justify-end pr-5 py-2 relative bg-slate-800">
                <i class='bx bxs-x-circle bg-red-600 px-4 rounded-md cursor-pointer text-teal-50 py-1'></i>
            </div>
        </div>
            
    </div>
   </div>

   <div v-if="invalidFiles.length >= 1" class="border mt-3">
    <div class="p-3 dark:bg-red-600 text-white">
        <h2 class=" font-bold text-2xl"><i class='bx bx-exclude' ></i>Unacceptable file  </h2>
    </div>
    <div class="flex">
        <div class="px-8 py-3">
            <p class="text-sm font-bold text-red-400">We excluded the files below because they do not follow the standard format.</p>
            <ul class="mt-3">
                <li  v-for="(file,index) in invalidFiles" :key="index" class="border px-4 py-2">
                    {{file.name}}
                </li>
            </ul>
        </div>
    </div>
   </div>
   
</div>

</template>
<script lang="ts">
import {defineComponent} from 'vue';
export default defineComponent({
    props:['pictures','invalidFiles'],
    data() {
        return {
         
        }
    }  
})
</script>
<style lang="">
    
</style>