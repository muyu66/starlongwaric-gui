<template>
    <div id="app"></div>
</template>

<script>
    import Route from './Route'

    const routes = [
        {path: '/login', component: Login},
        {path: '/index', component: Index}
    ]

    const router = new VueRouter({
        routes: routes,
    })

    export default {
        name: 'app',
    }
</script>

<style>

</style>
