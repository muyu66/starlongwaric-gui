import Vue from 'vue'
import VueRouter from 'vue-router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Index from './pages/Index'
import Login from './pages/Login'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/index',
            component: Index,
        },
    ]
})

new Vue({
    router,
}).$mount('#index')