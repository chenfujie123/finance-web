import VueRouter from 'vue-router'
import Vue from 'vue'

import Index from '../pages/home/index.vue';
import Authentication from '../pages/authentication/authentication.vue';


Vue.use(VueRouter)

const routes = [
    {
        path: '/index', 
        component: Index,
        name: 'index'
    },
    {
        path: '/authentication',
        component: Authentication,
        name: 'authentication'
    },
]

const router = new VueRouter({
    routes
})

export default router
