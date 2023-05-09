import {defineStore} from 'pinia';
import http from '../http';
import router from '../router';
/* This code is defining and exporting a Pinia store called `useAuthStore` with a state object
containing two properties: `isLoading` and `errorMessage`. It also defines an action called
`authenticate` which takes in a `username` and `password` and makes an HTTP POST request to an
authentication endpoint. Depending on the response, it may update the `isLoading` and `errorMessage`
properties in the state object. This store can be imported and used in other parts of the
application to manage authentication-related state. */
export const  useAuthStore = defineStore('Auth',{
    state:() => {
       return {
        isLoading:false,
        errorMessage:null
       }
    },
    actions:{
        async authenticate(username:string,password:string) {
            this.isLoading = true;
            this.errorMessage = null;
            await http.post('/auth',{
                'username' : username,
                'password' : password
            }).then(res => {
               
                if(res && res.status == 200) {
                    localStorage.setItem('sanctum-token',res.data.token);
                    router.push('/dashboard');
                }    
                
                this.isLoading = false;
                this.errorMessage = null
            }).catch((error => {
                if(error && error.response) {
                    this.errorMessage = error.response.data.message;
                }
                this.isLoading = false;

            }));
        }
    }
});