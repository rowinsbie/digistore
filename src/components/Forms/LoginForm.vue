<script lang="ts" >
import {useAuthStore} from '../../store/Auth';
import {defineComponent} from 'vue';
export default defineComponent({
    name:"Login",

    data() {
        return {
            username:"",
            password:"",
           // `Auth:useAuthStore()` is importing the `useAuthStore` function from the `Auth` store and
           // assigning it to the `Auth` variable in the component's `data` object. This allows the
           // component to access the `Auth` store's state and methods.
            Auth:useAuthStore()
        }
    },
    methods:{
      // The `signIn()` method is an asynchronous function that is called when the user submits the
      // login form. It calls the `authenticate()` method of the `Auth` store with the `username` and
      // `password` values as arguments. The `authenticate()` method is responsible for making an API
      // call to authenticate the user and setting the `Auth` store variables accordingly. By using the
      // `async` keyword, the `signIn()` method can wait for the `authenticate()` method to complete
      // before proceeding with any further actions.
        async signIn() {
            this.Auth.authenticate(this.username,this.password);
        },
       // The `clear()` method is a function defined in a Vue.js component that is used to reset the
       // `Auth` store. When called, it sets the `Auth` store variables to their initial values. This
       // method is called when the close button is clicked in the error message box that is displayed
       // if the authentication process fails. By resetting the `Auth` store, the error message is
       // cleared and the user can try to log in again.
        clear() {
            this.Auth.$reset();
        }
    },
    mounted() {

    }
});
</script>
<template>
    <section :class="Auth.isLoading ? ' animate-pulse pointer-events-none ' : ''" class="bg-white py-40 ">
        <div class="flex flex-col items-center justify-center px-2 py-2 mx-auto md:h-auto lg:py-0">
        
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                        Sign in to your account
                    </h1>
                    <form v-on:submit.prevent="signIn()" class="space-y-4 md:space-y-6" action="#">
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Username</label>
                            <input v-model="username" type="text" name="email" id="email" class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@company.com" >
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                            <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" >
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                  <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" >
                                </div>
                                <div class="ml-3 text-sm">
                                  <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                                </div>
                            </div>
                            <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button  type="submit" :class="Auth.isLoading ? ' pointer-events-none bg-slate-600':' pointer-events-auto'" class="w-full text-white bg-slate-950 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            
                            Sign in </button>

                           <!--This is a Vue.js template code that displays an error message if the
                            authentication process fails. The `v-if` directive checks if the
                            `Auth.errorMessage` variable is not null, and if it is not null, it
                            displays the error message in a red box with a close button. The
                            `Auth.errorMessage` variable is set in the `authenticate` method of the
                            `Auth` store. The `clear` method is called when the close button is
                            clicked, and it resets the `Auth` store. -->
                            <div v-if="Auth.errorMessage !== null" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                <strong class="font-bold">Authentication failed!</strong><br />
                                <span class="block sm:inline "> {{Auth.errorMessage}}</span>
                                <span v-on:click="clear()" class="absolute top-0 bottom-0 right-0 px-4 py-3">
                                  <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                                </span>
                              </div>

                    </form>
                </div>
            </div>
        </div>
        
      
      </section>

     
</template>

<style lang="">
    
</style>