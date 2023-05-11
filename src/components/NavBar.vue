<template lang="">
    
<div class="fixed top-0 left-0 right-0 z-50">
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl  p-4">
            <RouterLink to="/" class="flex items-center">
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SCredit MS</span>
            </RouterLink>
            <div class="flex items-center">
                <RouterLink to="/cart" class="mr-6 text-sm  text-gray-500 dark:text-white hover:underline hover:bg-violet-700 px-1 rounded-full "><i class='bx bxs-cart-alt text-3xl '></i>
    
                </RouterLink>
                <RouterLink to="/login" class="text-sm  text-blue-600 dark:text-white  py-2 px-3 rounded-lg "><i class='bx bxs-user-circle text-3xl'></i> </RouterLink>
                
            </div>
        </div>
    </nav>
    <nav class="bg-gray-50 dark:bg-gray-700">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
            <div class="flex items-center">
                <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                    <li>
                        <RouterLink to="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="text-gray-900 dark:text-white hover:underline">Items</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="text-gray-900 dark:text-white hover:underline">Team</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/" class="text-gray-900 dark:text-white hover:underline">Features</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>

</template>
<script lang="ts">
import {RouterLink} from 'vue-router';
import {defineComponent} from 'vue';
export default defineComponent({
    components:{
        RouterLink
    },
    data() {
        return {
            isLoggedIn:localStorage.getItem('sanctum-token')
        }
    }
})
</script>
<style lang="">
    
</style>