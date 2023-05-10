<template lang="">
    <div>
        <h1>dashboard</h1>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import http from '../http';
export default defineComponent({
    name:"dashboard",
    data() {
        return {

        }
    },
    mounted() {
        http.get('/user').then(res => {
            console.log(res);
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
});
</script>
<style lang="">
    
</style>