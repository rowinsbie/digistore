<template lang="">
    <aside id="separator-sidebar" class="border border-gray-100 z-40 w-1/3  rounded-2xl transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
        <UserCard />
        <div class="h-full px-3 py-4 overflow-y-auto bg-white">
           <ul class="space-y-2 font-medium">
              <li>
                 <RouterLink to="/dashboard" class="flex items-center p-2 text-black rounded-lg dark:text-black hover:text-white hover:bg-gray-100 dark:hover:bg-violet-700">
                    <svg aria-hidden="true" class="w-6 h-6 text-black-500 transition duration-75  group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span class="ml-3">Dashboard</span>
                 </RouterLink>
              </li>
              <li>
                 <RouterLink to="/" class="flex items-center p-2 text-black rounded-lg dark:text-black hover:text-white hover:bg-gray-100 dark:hover:bg-violet-700">
                    <svg aria-hidden="true" class="w-6 h-6 text-black-500 transition duration-75  group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                    <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                 </RouterLink>
              </li>
              <li>
                 <RouterLink to="/" class="flex items-center p-2 text-black rounded-lg dark:text-black hover:text-white hover:bg-gray-100 dark:hover:bg-violet-700">
                    <svg aria-hidden="true" class="w-6 h-6 text-black-500 transition duration-75  group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                    <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                 </RouterLink>
              </li>
              <li>
                 <RouterLink to="/" class="flex items-center p-2 text-black rounded-lg dark:text-black hover:text-white hover:bg-gray-100 dark:hover:bg-violet-700">
                    <svg aria-hidden="true" class="w-6 h-6 text-black-500 transition duration-75  group-hover:text-white dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 whitespace-nowrap">Customers</span>
                 </RouterLink>
              </li>
             
           </ul>
        </div>
     </aside>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";
import { defineComponent } from "vue";
import UserCard from "../Cards/UserCard.vue";
export default defineComponent({
  components: {
    RouterLink,
    UserCard
  },
  mounted() {},
});
</script>
<style lang=""></style>
