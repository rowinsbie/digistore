<template lang="">
    <div class=" sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mt-40 mx-auto px-10 ">
        <div class="flex justify-center items-center">
          <div>
            <img src="./img/500-error.png" class=" w-96" alt="Network error"  />
            <h1 class=" font-bold text-4xl">Internal Server Error</h1>
            <p>Something occured in the server side.</p>
          </div>
        </div>
    </div>
</template>
  <script lang="ts">
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "dashboard",
    components: {
    },
    data() {
      return {};
    },
    mounted() {
   
    },
  });
  </script>
  <style lang=""></style>
  