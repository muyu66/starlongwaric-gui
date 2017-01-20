import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Exception from './commons/Exception'
import Audio from './commons/Audio'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Exception);
Vue.use(Audio);

import Index from './pages/Index'
import Login from './pages/Login'
import MyFleet from './pages/MyFleet'
import MyTech from './pages/MyTech'
import MyBody from './pages/MyBody'
import Command from './pages/Command'
import Report from './pages/Report'
import Message from './pages/Message'
import Friend from './pages/Friend'
import Register from './pages/Register'

import CheckAuth from './middlewares/CheckAuth'

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Login,
            meta: { title: '星际的远征' },
        },
        {
            path: '/login',
            component: Login,
            meta: { title: '登舰手续 - 星际的远征' },
        },
        {
            path: '/register',
            component: Register,
            meta: { title: '注册 - 星际的远征' },
        },
        {
            path: '/index',
            component: Index,
            meta: { title: '星际的远征' },
        },
        {
            path: '/my_fleet',
            component: MyFleet,
            meta: { title: '舰队 - 星际的远征' },
        },
        {
            path: '/my_tech',
            component: MyTech,
            meta: { title: '科技 - 星际的远征' },
        },
        {
            path: '/my_body',
            component: MyBody,
            meta: { title: '维修 - 星际的远征' },
        },
        {
            path: '/command',
            component: Command,
            meta: { title: '指令 - 星际的远征' },
        },
        {
            path: '/report',
            component: Report,
            meta: { title: '汇报 - 星际的远征' },
        },
        {
            path: '/message',
            component: Message,
            meta: { title: '消息 - 星际的远征' },
        },
        {
            path: '/friend',
            component: Friend,
            meta: { title: '盟友 - 星际的远征' },
        },
    ]
});

router.beforeEach((to, from, next) => {
    /**
     * Auth 中间件
     * @type {[*]}
     */
    let excepts = ['/', '/login', '/register']; // 这些路由不需要授权
    if (excepts.indexOf(to.path) === -1) {
        CheckAuth();
    }
    next();
});

router.afterEach((to, from) => {
    /**
     * 动态页面标题
     */
    document.title = to.meta.title;
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');