<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter)
    const Foo = {template: '<div>TopBar</div>'}

    const routes = [
        {path: '/foo', component: Foo},
    ]

    const router = new VueRouter({
        routes // （缩写）相当于 routes: routes
    })

    export default {
        name: 'app',
        router,
    }
</script>

<style>

</style>
