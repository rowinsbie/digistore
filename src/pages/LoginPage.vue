<template lang="">
    <div class="bg-white ">
       <LoginForm />
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import LoginForm from '../components/Forms/LoginForm.vue';
export default defineComponent({
    name:"Login",
    components:{
        LoginForm
    },
    data() {
        return {

        }
    },
    mounted() {
    }
});
</script>
<style lang="">
    
</style>