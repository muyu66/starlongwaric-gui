import Vue from 'vue'
import App from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

new Vue({
    el: '#app',
    template: '<App/>',
    components: {App},
}).$mount('#app')