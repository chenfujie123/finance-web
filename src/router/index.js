import VueRouter from 'vue-router'
import Vue from 'vue'

import Index from '../pages/home/index.vue';
import Authentication from '../pages/authentication/authentication.vue';


Vue.use(VueRouter)

const routes = [
    //主页路由
    {
        path: '/index', 
        component: Index,
        name: 'index'
    },
    //实名认证页路由
    {
        path: '/authentication',
        component: Authentication,
        name: 'authentication',
        beforeEnter: (to, from, next) => {
            if (to.params.isLogin) {
                console.log(to.params.isLogin);
                next(false);
            } else {
                next();
            }
        }
    },
]

const router = new VueRouter({
    routes
})

export default router
