<template lang="">
  <div class="flex flex-col md:flex-row gap-5 ">
    <div class="max-w-sm mx-auto md:mx-0 border md:max-w-lg  rounded-lg">
      <form action="">
        <div class="block">
          <form>
            <div class="  dark:bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-3">
              <h2 class="text-xl text-white font-bold flex gap-3"><i class='bx bxs-folder-plus text-2xl' ></i> Add product</h2>
            </div>
  
            <div class="px-6 pb-6 ">
              <div class="flex flex-col md:flex-row gap-3 ">
                <div class="mt-6 w-full">
                  <label
                    for="small-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >Product Name</label
                  >
                  <input
                    type="text"
                    id="small-input"
                    placeholder="Enter product name"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
      
                
  
                <div class="mb-3 w-full mt-6">
                  <label
                    for="formFileMultiple"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >Product Pictures</label
                  >
                  <input
                    class=" relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-400 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-slate-700 focus:cursor-pointer focus:border-primary focus:text-neutral-700 focus:outline-none dark:text-neutral-200 dark:file:bg-slate-900 dark:file:text-neutral-100 dark:focus:border-primary"
                    type="file"
                    id="formFileMultiple"
                    multiple />
                </div>
  
              </div>
  
              <div class="flex flex-col md:flex-row gap-3 ">
                <div class="mt-6 w-full">
                  <label
                    for="small-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >Price</label
                  >
                  <input
                    type="number"
                    id="small-input"
                    placeholder="Price"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
      
                <div class="mt-6 w-full">
                  <label
                    for="small-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >Quantity</label
                  >
                  <input
                    type="number"
                    id="small-input"
                    placeholder="Quantity"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
              </div>
  
    
             
              <div class="mt-6 w-full">
                <label
                  for="small-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >Description</label
                >
                <textarea
                rows="5"
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter product description"
                ></textarea>
              </div>
  
              
  
              <div class="mb-3 mt-4">
                <label
                for="formFileMultiple"
                class=" inline-block text-black-700 dark:text-black"
                >Tags</label
              >
                <TagInput />
              </div>
              <div class="mb-3 mt-4">
                <label
                for="formFileMultiple"
                class=" inline-block text-black-700 dark:text-black"
                >Category</label
              >
                <TagInput />
              </div>
              <hr />
              <div class="divide-y divide-gray-600 mt-4 flex justify-end ">
                <button type="button" class=" bg-slate-900 px-4 text-white py-2 rounded-lg hover:bg-slate-800  "> <span class="flex justify-between">Save Product</span></button>
              </div>
            </div>
  
          </form>
        </div>
      </form>
    </div>
    <Preview />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TagInput from "../components/Util/TagInput.vue";
import Preview from "../components/Product/Preview.vue";
export default defineComponent({
  name: "dashboard",
  components: {
    TagInput,
    Preview
  },
  data() {
    return {};
  },
  mounted() {},
});
</script>
<style lang=""></style>
