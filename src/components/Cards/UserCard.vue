<template lang="">
    
<div :class="isLoading ? ' animate-pulse pointer-events-none ' : ''" class="w-full max-w-sm bg-white border border-gray-100 rounded-md md:block sm:hidden  ">

    <div class="flex flex-col items-center pt-10 pb-10">
        <img class="md:w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-black">{{name}}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Visual Designer {{isLoading}}</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-violet-950 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-violet-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Message</a>
        </div>
    </div>
</div>
    
</template>
    <script lang="ts">
    import {RouterLink} from 'vue-router';
    import {defineComponent} from 'vue';
import http from '../../http';
    export default defineComponent({
        components:{
            RouterLink
        },
        data() {
            return {
                name:"",
                isLoading:false,
                isDropOpen:false,
            }
        },
        mounted() {
            this.isLoading = true;
            http.get('/user').then(res => {
                if(res && res.data) {
                    this.name = res.data.first_name + " " + res.data.last_name;
                }
                this.isLoading = false;

            }).catch((error) => {
                this.isLoading = false;

                return Promise.reject(error)
            })
        }
    })
    </script>
    <style lang="">
        
    </style>