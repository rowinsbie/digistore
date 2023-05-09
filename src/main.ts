import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import Interceptor from './Interceptor';

const pinia = createPinia()
createApp(App).use(Interceptor).use(pinia).use(router).mount('#app')
