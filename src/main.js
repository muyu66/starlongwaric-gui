import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter);
Vue.use(VueResource);

import Index from './pages/Index'
import Login from './pages/Login'
import MyFleet from './pages/MyFleet'
import MyTech from './pages/MyTech'
import MyBody from './pages/MyBody'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/index',
            component: Index
        },
        {
            path: '/my_fleet',
            component: MyFleet
        },
        {
            path: '/my_tech',
            component: MyTech
        },
        {
            path: '/my_body',
            component: MyBody
        },
    ]
});
new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');