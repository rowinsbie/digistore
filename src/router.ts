import { createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router';
import DashboardPage from './pages/DashboardPage.vue';
import HomePage from './pages/HomePage.vue';
import LoginPage from './pages/LoginPage.vue';

const routes : Array<RouteRecordRaw> = [
    {
        path:"/",
        name:"home",
        component:HomePage
    },
    {
        path:"/login",
        name:"Login",
        component:LoginPage,
        meta: { requiresAuth: false },
       /* it is checking if the route being accessed requires authentication
       (`to.meta.requiresAuth`) and if the user has a valid token
       (`localStorage.getItem('sanctum-token') !== null`). If both conditions are true, it redirects
       the user to the dashboard page (`next({name:'Dashboard'})`). Otherwise, it allows the user to
       proceed to the requested page (`next()`). */
        beforeEnter:(to,from,next) => {
            if(!to.meta.requiresAuth && localStorage.getItem('sanctum-token') !== null) {
                return next({name:'Dashboard'})
            } else {
                next();
            }
        }

    },
    {
        path:'/dashboard',
        name:"Dashboard",
        component:DashboardPage,
        meta:{
            requiresAuth:true
        }
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
});


router.beforeEach((to,from,next) => {
   /* This code is a navigation guard that is executed before each navigation. It checks if the user is
   authenticated by verifying if there is a valid token in the local storage
   (`localStorage.getItem('sanctum-token')`). If the user is not authenticated and is trying to
   access a page other than the login page (`to.name !== 'Login'`), it redirects the user to the
   login page (`next({ name: 'Login' })`). Otherwise, it allows the user to proceed to the requested
   page (`else next()`). */
    if (to.meta.requiresAuth && to.name !== 'Login' && !localStorage.getItem('sanctum-token')) next({ name: 'Login' })
    else next()
   
})

export default router;