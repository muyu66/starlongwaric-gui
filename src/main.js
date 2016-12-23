import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const Index = {template: '<div>index</div>'}
const Login = {template: '<div>login</div>'}
const routes = [
    {path: '/login', component: Login},
    {path: '/index', component: Index},
]

const router = new VueRouter({
    routes: routes,
})

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router,
}).$mount('#app')