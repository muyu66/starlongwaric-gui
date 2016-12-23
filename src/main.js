import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
})