<template lang="">
    <div class="w-full my-6">
        <div class="flex flex-wrap h-20 items-center gap-4 border border-gray-200 rounded-md p-3 overflow-x-hidden overflow-y-auto hover:ring hover:ring-purple-400 transition-all ease-in-out duration-150">
            <span v-for="(t,i) in tags" :key="i" class="flex items-center p-2 bg-gray-400/50 rounded-md space-x-2 bg-gradient-to-r from-slate-800 to-slate-900">
                <span class="text-white">
                        {{t}}
                </span>
                <i class='bx bxs-x-circle text-white' @click="() => removeTag(i)"></i>
            </span>
            <input type="text" class="flex-grown h-full outline-none border-none" v-model="tag" @keydown="manageKeyPress">
        </div>
    </div>
</template>
<script setup lang="ts">
 import { ref } from 'vue';

 const tags = ref<String[]>([]);
 const tag = ref<String>("");

// `const removeTag` is a function that takes an index as a parameter and removes the tag at that index
// from the `tags` array using the `splice` method. The `splice` method modifies the original array by
// removing or adding elements and returns the removed elements. In this case, it removes one element
// at the specified index.
const removeTag = (index:number) => {
    tags.value.splice(index,1);
}


// `const addTag` is a function that checks if the `tag` value is not empty and not already included in
// the `tags` array. If both conditions are met, it adds the `tag` value to the `tags` array using the
// spread operator and sets the `tag` value to an empty string. If the `tag` value is empty or already
// included in the `tags` array, it returns without modifying the `tags` array.
const addTag = () => {
    let v = tag.value.trim().toUpperCase();
    if(v == '') {
        return;
    }


    if(!tags._rawValue.includes(v)) {
        tags.value = [... tags.value, v]
    }
   
    tag.value = ''

}

const manageKeyPress = (e) => {
    if(e.key == 'Enter') addTag()
    else if (e.key == 'Backspace' && tag.value === "") tags.value.pop()
}

</script>

<style lang="">
    
</style>