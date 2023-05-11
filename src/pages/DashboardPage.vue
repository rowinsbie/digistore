<template lang="">
  <nav class="bg-white border-gray-200 mx-auto max-w-7xl">
    <div class="flex flex-wrap gap-10 mt-40">
      <SideBar />
      <Cart />
    </div>
  </nav>
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
    Cart
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
