import { createRouter, createWebHashHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router';
import DashboardPage from './pages/DashboardPage.vue';
import HomePage from './pages/HomePage.vue';
const routes : Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"home",
        component:HomePage
    },
    {
        path:'/dashboard',
        name:"dashboard",
        component:DashboardPage
    }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
});

export default router;