import VueRouter from 'vue-router'
import Vue from 'vue'

import Index from '../pages/home/index.vue';
import Authentication from '../pages/authentication/authentication.vue';
import Fund from '../components/Fund.vue';
import fundDetail from '../pages/fund-detail'


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
                alert("请先登录")
                next(false);
            } else {
                next();
            }
        }
    },
    //基金页
    {
        path: '/fund',
        component: Fund,
        name: 'fund'
    },
    //基金详情页
    {
        path: '/fundDetail',
        component: fundDetail,
        name: 'fundDetail'
    }
]

const router = new VueRouter({
    routes
})

export default router
