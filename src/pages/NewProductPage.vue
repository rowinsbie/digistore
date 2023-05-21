<template lang="">
  <div class="flex flex-col md:flex-row gap-5">
    <div class="max-w-sm mx-auto md:mx-0 border md:max-w-lg rounded-lg">
      <form action="">
        <div class="block">
          <form>
            <div
              class="dark:bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-3"
            >
              <h2 class="text-xl text-white font-bold flex gap-3">
                <i class="bx bxs-folder-plus text-2xl"></i> Add product
              </h2>
            </div>

            <div class="px-6 pb-6">
              <div class="flex flex-col md:flex-row gap-3">
                <div class="mt-6 w-full">
                  <label
                    for="small-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >Product Name</label
                  >
                  <input
                    v-model="state.product.product_name"
                    type="text"
                    id="small-input"
                    placeholder="Enter product name"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <span
                    v-if="v$.product.product_name.$error"
                    class="text-red-700 font-bold text-sm"
                  >
                    {{ v$.product.product_name.$errors[0].$message }}
                  </span>
                </div>

                <div class="mb-3 w-full mt-6">
                  <label
                    for="formFileMultiple"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >Product Pictures</label
                  >
                  <input
                    v-on:change="selectPictures"
                    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-400 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-slate-700 focus:cursor-pointer focus:border-primary focus:text-neutral-700 focus:outline-none dark:text-neutral-200 dark:file:bg-slate-900 dark:file:text-neutral-100 dark:focus:border-primary"
                    type="file"
                    id="formFileMultiple"
                    multiple
                  />
                </div>
              </div>

              <div class="flex flex-col md:flex-row gap-3">
                <div class="mt-6 w-full">
                  <label
                    for="small-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >Price</label
                  >
                  <input
                    v-model="state.product.price"
                    type="number"
                    id="small-input"
                    placeholder="Price"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <span
                    v-if="v$.product.price.$error"
                    class="text-red-700 font-bold text-sm"
                  >
                    {{ v$.product.price.$errors[0].$message }}
                  </span>
                </div>

                <div class="mt-6 w-full">
                  <label
                    for="small-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                    >Quantity</label
                  >
                  <input
                    v-model="state.product.quantity"
                    type="number"
                    id="small-input"
                    placeholder="Quantity"
                    class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <span
                    v-if="v$.product.quantity.$error"
                    class="text-red-700 font-bold text-sm"
                  >
                    {{ v$.product.quantity.$errors[0].$message }}
                  </span>
                </div>
              </div>

              <div class="mt-6 w-full">
                <label
                  for="small-input"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                  >Description</label
                >
                <textarea
                v-model="state.product.description"
                  rows="5"
                  type="text"
                  id="small-input"
                  class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:text-dark dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter product description"
                ></textarea>
                <span
                v-if="v$.product.description.$error"
                class="text-red-700 font-bold text-sm"
              >
                {{ v$.product.description.$errors[0].$message }}
              </span>
              </div>

              <div class="mb-3 mt-4">
                <label
                  for="formFileMultiple"
                  class="inline-block text-black-700 dark:text-black"
                  >Tags</label
                >
                <TagInput />
              </div>
              <div class="mb-3 mt-4">
                <label
                  for="formFileMultiple"
                  class="inline-block text-black-700 dark:text-black"
                  >Category</label
                >
                <TagInput />
              </div>
              <hr />
              <div class="divide-y divide-gray-600 mt-4 flex justify-end">
                <button
                  type="button"
                  @click="save"
                  class="bg-slate-900 px-4 text-white py-2 rounded-lg hover:bg-slate-800"
                >
                  <span class="flex justify-between">Save Product</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </form>
    </div>
    <Preview :pictures="state.product.pictures" :invalidFiles="state.invalidFiles"  />
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from "vue";
import TagInput from "../components/Util/TagInput.vue";
import Preview from "../components/Product/Preview.vue";
import useVuelidate from "@vuelidate/core";
import {
  required,
  numeric,
  minValue,
  helpers,
  maxLength,
  minLength,
} from "@vuelidate/validators";

// http request
import http from "../http";

export default defineComponent({
  name: "dashboard",
  components: {
    TagInput,
    Preview,
  },
  setup() {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i
    const state = reactive({
      product: {
        product_name: "",
        price: "",
        quantity: "",
        pictures: [],
        description: "",
      },
      invalidFiles:[]
     
    });

    const rules = computed(() => {
      return {
        product: {
          product_name: {
            required: helpers.withMessage("Product name is required", required),
            maxLength: maxLength(100),
            minLength: minLength(3),
          },
          pictures: {
            required: helpers.withMessage("Select product pictures", required),
          },
          price: {
            minValue: helpers.withMessage(
              "Price must be greater than 0",
              minValue(1)
            ),
            numeric: helpers.withMessage("Price must be numeric", numeric),
            required: helpers.withMessage("Price is required", required),
            maxLength: maxLength(9),
          },
          quantity: {
            minValue: helpers.withMessage(
              "Quantity must be greater than 0",
              minValue(1)
            ),
            numeric: helpers.withMessage("Quantity must be numeric", numeric),
            required: helpers.withMessage("Quantity is required", required),
            maxLength: maxLength(9),
          },
          description: {
            maxLength: maxLength(200),
          },
        },
      };
    });

    const v$ = useVuelidate(rules, state);

    const selectPictures = (e) => {
      let files = e.target.files;

      if (!files.length) return;

      Object.values(files).forEach((data,index) => {
            if(!allowedExtensions.exec(data.name)) {
               state.invalidFiles.push(data);
            } else {
              var reader = new FileReader();
              reader.onload = (e) => {
                  console.log(e.target?.result);
                  state.product.pictures.push(e.target?.result);
              };
              reader.readAsDataURL(data);
              
            }
            
      });

    };

    return {
      state,
      v$,
      selectPictures,
    };
  },
  data() {
    return {
      v$: useVuelidate(),
    };
  },
  methods: {
    save() {
      this.v$.$validate();
      console.log(this.state);
      if (!this.v$.$error) {
    
        // test
        http.post('/upload',{
          data:this.state.product
        }).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        });

      } else {
      }
    },
  },
});
</script>
<style lang=""></style>
