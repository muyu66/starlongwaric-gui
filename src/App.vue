<template>
    <div id="app"></div>
</template>

<script>
    import VueRouter from 'vue-router'
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
