<template lang="">
    <Cart />
  </template>
  <script lang="ts">
  import { defineComponent } from "vue";
  import Cart from "../components/Cart.vue";
  export default defineComponent({
    name: "dashboard",
    components: {
      Cart,
    },
    data() {
      return {};
    },
    mounted() {
   
    },
  });
  </script>
  <style lang=""></style>
  