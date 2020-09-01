import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        children: []
    },
    {
        path:'/fund',
        name:'fund',
        component:()=>import('../views/Fund.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import( '../views/Login.vue')
    },
    {
        path: '/notFound',
        component: () => import('../views/NotFound.vue')
    },
    {
        path: '**',
        redirect: '/notFound'
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
