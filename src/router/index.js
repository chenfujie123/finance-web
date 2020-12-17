import VueRouter from 'vue-router'
import Vue from 'vue'

import Index from '../pages/home/index.vue';


Vue.use(VueRouter)

const routes = [
    {
        path: '/index', 
        component: Index,
        name: 'index'
    },
]

const router = new VueRouter({
    routes
})

export default router
