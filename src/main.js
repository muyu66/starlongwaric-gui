import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}

const routes = [
    {path: '/foo', component: Foo},
    {path: '/bar', component: Bar}
]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
    router,
}).$mount('#app')