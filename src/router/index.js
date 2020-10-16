import Vue from 'vue'
import VueRouter from 'vue-router'
import test from '../test.vue'
import home from '../Home.vue'
import analytics from '../Analytics.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name:'home',
        component: home
    },
    {
        path: '/test',
        name:'test',
        component: test
    },
    {
        path: '/analytics',
        name:'analytics',
        component: analytics
    }
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router