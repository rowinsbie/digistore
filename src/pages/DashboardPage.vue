<template lang="">
  <div id="card" class="relative w-full h-60 rounded-2xl font-mono text-white overflow-hidden cursor-pointer transition-all duration-500" style="transition: 0.6s;transform-style: preserve-3d;">

    <!-- Front content -->
    <div class="  absolute sm:px-9 top-0 left-0 w-full h-full flex flex-col justify-center gap-6 p-6 bg-gradient-to-r from-slate-800 to-slate-900 transition-all duration-100 delay-200 z-20" style="transform: rotateY(0deg);">

      <div class="flex justify-between items-center">
        <img src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png" alt='Smart card' class="w-12">

        <h3>DigiCard</h3>
      </div>

      <!-- CardNumber -->
      <div class="">
        <label for="" class="hidden">Card Number</label>
        <input type="text" id="" value="**** **** **** ****" readonly
               class="outline-none w-full bg-transparent text-center text-2xl">
      </div>

      <div class="w-full flex flex-row justify-between">

        <div class="w-full flex flex-col">
          <label for="">Card holder</label>
          <input type="text" id="" value="Daniel Castillo Guindos" readonly
                 class="outline-none bg-transparent">
        </div>

        <div class="w-1/4 flex flex-row gap-3">
     
          <label for="">Limit:</label>
          <span>1,000</span>
        
       
        </div>

      </div>

    </div>
    </div>

</template>
<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "../components/Layouts/SideBar.vue";
import Cart from "../components/Cart.vue";
import http from "../http";
export default defineComponent({
  name: "dashboard",
  components: {
    SideBar,
    Cart,
  },
  data() {
    return {};
  },
  mounted() {
    http
      .get("/user")
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
});
</script>
<style lang=""></style>
