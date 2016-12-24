<template>
    <script src="https://unpkg.com/vue/dist/vue.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

    <div id="app">
        <h1>Hello App!</h1>
        <p>
            <router-link to="/foo">Go to Foo</router-link>
            <router-link to="/bar">Go to Bar</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
    import Login from './pages/Login'
    import Index from './pages/Index'

    const routes = [
        {path: '/login', component: Login},
        {path: '/index', component: Index}
    ]

    const router = new VueRouter({
        routes: routes,
    })

    export default {
        name: 'app',
        router,
    }
</script>

<style>

</style>
