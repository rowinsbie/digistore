<template lang="">
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
