import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)
import Index from './pages/Index'
import Login from './pages/Login'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/#/login',
            component: Login
        },
        {
            path: '/#/index',
            component: Index
        },
    ]
})
new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app')